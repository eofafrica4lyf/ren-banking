import React from 'react'

function Register() {
	return (
		<div class="app-content content">
			<div class="content-wrapper">
				<div class="content-wrapper-before"></div>
				<div class="content-body">
					<section id="content-types">
						<div class="row">
							<div class="col-12 mt-3 mb-1">
								<h1 class="text-uppercase" style={{color: "white", paddingBottom: "3em"}}>Registration Page</h1>
							</div>
						</div>
						<div class="row match-height justify-content-center">
							<div class="col-xl-3 col-md-9">
								<div class="card register-form">
									<div class="card-content">
										<div class="card-body">
											<h6 class="card-subtitle text-muted pt-3 pb-1">Let's get you started by getting your details!</h6>
										</div>
										<div class="card-body">
											<form class="form">
												<div class="form-body">
													<div class="form-group">
														<label for="donationinput1" class="sr-only">First Name</label>
														<input type="text" id="donationinput1" class="form-control" placeholder="First Name" name="fname" />
													</div>
													<div class="form-group">
														<label for="donationinput2" class="sr-only">Last Name</label>
														<input type="text" id="donationinput2" class="form-control" placeholder="Last Name" name="lanme" />
													</div>
													<div class="form-group">
														<label for="donationinput3" class="sr-only">E-mail</label>
														<input type="email" id="donationinput3" class="form-control" placeholder="E-mail" name="email" />
													</div>
													<div class="form-group">
														<label for="donationinput4" class="sr-only">Contact Number</label>
														<input type="text" id="donationinput4" class="form-control" placeholder="Phone" name="phone" />
													</div>
													<div class="form-group">
														<label for="donationinput7" class="sr-only">Message</label>
														<textarea id="donationinput7" rows="5" class="form-control square" name="message" placeholder="message"></textarea>
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

export default Register

