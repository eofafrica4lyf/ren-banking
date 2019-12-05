import React, { useState, useEffect, useContext } from 'react'
import userLogin from '../../apiservice/userLogin'
import { withRouter } from 'react-router-dom';
import { authContext } from '../../context/authContext'

function Login(props) {
	const [state, setState] = useState({
		email: "aboderinemmanuel@gmail.com",
		password: "password",
	})
	const { isLoggedIn, setIsLoggedIn } = useContext(authContext)
	const { setUserInfo } = useContext(authContext)
	console.log(isLoggedIn);

	function fieldHandler(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	}

	async function formSubmitHandler(evt) {
		evt.preventDefault();
		const result = await userLogin(state);
		console.log(result);
		if (result.statusCode === 200) {
			localStorage.setItem("jwt", JSON.stringify({ id: result.payload._id, token: result.token }))
			result.payload.balance = result.payload.balance.toFixed(2);
			result.payload.lastLogin = new Date(result.payload.lastLogin).toGMTString()
			localStorage.setItem("user", JSON.stringify(result.payload))
			console.log(isLoggedIn);
			setIsLoggedIn(true)
			setUserInfo(result.payload)
			console.log(isLoggedIn);
			props.history.push('/dashboard')
		} else {
			document.querySelector("#login-notice").style.display = "block";
			setTimeout(() => {
				document.querySelector("#login-notice").style.display = "none";
			}, 3000);
		}
	}

	useEffect(() => {
		if (localStorage.jwt) {
			setIsLoggedIn(true);
			props.history.push('/dashboard')
		}
	}, [setIsLoggedIn, props.history]);

	useEffect(() => {
		if (isLoggedIn) {
			props.history.push('/dashboard')
		}
	})

	return (
		<div class="app-content content">
			<div class="content-wrapper">
				<div class="content-wrapper-before"></div>
				<div class="content-body">
					<section id="content-types">
						<div class="row">
							<div class="col-12 mt-3 mb-1">
								<h1 class="text-uppercase" style={{ color: "white", paddingBottom: "3em" }}>Login Page</h1>
							</div>
						</div>
						<div class="row match-height justify-content-center">
							<div class="col-xl-3 col-md-9 col-sm-8 col-xs-6">
								<div class="card login-form">
									<div class="card-content">
										<div class="card-body">
											<h6 class="card-subtitle text-muted">Login to User Dashboard</h6>
										</div>
										<div class="card-body">
											<div id="login-notice" style={{ display: "none", borderRadius: "5px", border: "1px solid red", backgroundColor: "#ffe3e3", paddingTop: "10px", marginBottom: "1em" }}>
												<p style={{ color: "red" }}>Invalid Email or Password!</p>
											</div>
											<form class="form" onSubmit={formSubmitHandler}>
												<div class="form-body">
													<div class="form-group">
														<label for="email" class="sr-only">First Name</label>
														<input type="email" id="email" class="form-control" placeholder="Email Address" name="email" value={state.email}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="password" class="sr-only">Last Name</label>
														<input type="password" id="password" class="form-control" placeholder="Password" name="password" value={state.password}
															onChange={fieldHandler} />
													</div>
												</div>
												<div class="form-actions center">
													<button type="submit" class="btn btn-outline-primary">Log In</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default withRouter(Login);

