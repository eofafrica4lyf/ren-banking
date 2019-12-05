const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');
const httpStatus = require('http-status');
const sendResponse = require('../../helpers/response');
const { UserQuery } = require('../queries/queries');


const UserController = () => {
	const register = async (req, res, next) => {
		try {
			let { firstName, middleName, lastName, email, password, password2 } = req.body;
			console.log("Oh yeah!")
			if (password !== password2) {
				return res.json(
					sendResponse(
						httpStatus.BAD_REQUEST,
						'Passwords do not match',
						{},
						{ password: 'passwords do not match' }
					)
				);
			}

			const userExist = await UserQuery.findByEmail(email);

			if (userExist) {
				return res.json(
					sendResponse(
						httpStatus.BAD_REQUEST,
						'email has been taken',
						{},
						{ email: 'email has been taken' }
					)
				);
			}
			const userObject = {
				firstName,
				middleName,
				lastName,
				email,
				password,
			};

			userObject.password = bcryptService().hashPassword(userObject);
			const user = await UserQuery.create(userObject);
			delete user.password

			return res.json(sendResponse(httpStatus.OK, 'success', user, null));
		} catch (err) {
			next(err);
		}
	};


	const login = async (req, res, next) => {
		try {
			const { email, password } = req.body;

			const user = await UserQuery.findByEmail(email);
			if (!user) {
				return res.json(
					sendResponse(
						httpStatus.NOT_FOUND,
						'User does not exist',
						{},
						{ error: 'User does not exist' }
					)
				);
			}
			const userInfo = {
				_id: user._id,
				firstName: user.firstName,
				middleName: user.middleName,
				lastName: user.lastName,
				email: user.email,
				balance: user.balance,
				accountNumber: user.accountNumber,
				bvn: user.bvn,
				lastLogin: user.lastLogin
			};

			if (bcryptService().comparePassword(password, user.password)) {
				// to issue token with the user object, convert it to JSON
				const token = authService().issue(userInfo);


				return res.json(
					sendResponse(httpStatus.OK, 'success', userInfo, null, token)
				);

			}

			return res.json(
				sendResponse(
					httpStatus.BAD_REQUEST,
					'invalid email or password',
					{},
					{ error: 'invalid email or password' }
				)
			);
		} catch (err) {
			next(err);
		}
	};

	return {
		register,
		login
	};
};

module.exports = UserController;
