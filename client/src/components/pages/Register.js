import React, { useState, useContext, useEffect } from 'react'
import registerUser from '../../apiservice/registerUser'
import { withRouter } from 'react-router-dom';
// import history from '../../helpers/history'
import { authContext } from '../../context/authContext'

function Register(props) {
	const [state, setState] = useState({
		firstName: "Emmanuel",
		middleName: "Abolade",
		lastName: "Aboderin",
		email: "aboderinemmanuel@gmail.com",
		password: "password",
		password2: "password"
	})
	// const { isLoggedIn, setIsLoggedIn } = useContext(authContext);
	// const { userInfo, setUserInfo } = useContext(authContext);

	function fieldHandler(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	}

	async function formSubmitHandler(evt) {
		evt.preventDefault();
		const result = await registerUser(state);
		console.log(result);
		if (result.statusCode === 200) {
			props.history.push('/login')
		} else {
			document.querySelector("#login-notice").style.display = "block";
			setTimeout(() => {
				document.querySelector("#login-notice").style.display = "none";
			}, 3000);
		}
	}

	return (
		<div class="app-content content">
			<div class="content-wrapper">
				<div class="content-wrapper-before"></div>
				<div class="content-body">
					<section id="content-types">
						<div class="row">
							<div class="col-12 mt-3 mb-1">
								<h1 class="text-uppercase" style={{ color: "white", paddingBottom: "3em" }}>Registration Page</h1>
							</div>
						</div>
						<div class="row match-height justify-content-center">
							<div class="col-xl-3 col-md-9 col-sm-8 col-xs-6">
								<div class="card register-form">
									<div class="card-content">
										<div class="card-body">
											<h6 class="card-subtitle text-muted pt-3 pb-1">Let's get you started by getting your details!</h6>
										</div>
										<div class="card-body">
											<div id="login-notice" style={{ display: "none", borderRadius: "5px", border: "1px solid red", backgroundColor: "#ffe3e3", paddingTop: "10px", marginBottom: "1em" }}>
												<p style={{ color: "red" }}>You have some errors in some fields!</p>
											</div>
											<form class="form" onSubmit={formSubmitHandler}>
												<div class="form-body">
													<div class="form-group">
														<label for="firstName" class="sr-only">First Name</label>
														<input type="text" id="firstName" class="form-control" placeholder="First Name" name="firstName" value={state.firstName}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="middleName" class="sr-only">Middle Name</label>
														<input type="text" id="middleName" class="form-control" placeholder="Middle Name" name="middleName" value={state.middleName}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="lastName" class="sr-only">Last Name</label>
														<input type="text" id="lastName" class="form-control" placeholder="Last Name" name="lastName" value={state.lastName}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="email" class="sr-only">E-mail</label>
														<input type="email" id="email" class="form-control" placeholder="E-mail" name="email" value={state.email}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="password" class="sr-only">Password</label>
														<input type="password" id="password" class="form-control" placeholder="Paswword" name="password" value={state.password}
															onChange={fieldHandler} />
													</div>
													<div class="form-group">
														<label for="password2" class="sr-only">Confirm Password</label>
														<input type="password" id="password2" class="form-control" placeholder="Confirm Paswword" name="password2" value={state.password2}
															onChange={fieldHandler} />
													</div>
												</div>
												<div class="form-actions center">
													<button type="submit" class="btn btn-outline-primary">Send</button>
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

export default withRouter(Register)

