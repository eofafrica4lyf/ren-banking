import React from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {
	return (

		<div className='App'>

			<nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
				<div class="navbar-wrapper">
					<div class="navbar-container content">
						<div class="collapse navbar-collapse show" id="navbar-mobile">
							<ul class="nav navbar-nav mr-auto float-left">
								<li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="/#"><i class="ft-menu"></i></a></li>
								<li class="nav-item d-none d-md-block"><a class="nav-link nav-link-expand" href="/#"><i class="ficon ft-maximize"></i></a></li>
								<li class="nav-item dropdown navbar-search"><a class="nav-link dropdown-toggle hide" data-toggle="dropdown" href="/#"><i class="ficon ft-search"></i></a>
									<ul class="dropdown-menu">
										<li class="arrow_box">
											<form>
												<div class="input-group search-box">
													<div class="position-relative has-icon-right full-width">
														<input class="form-control" id="search" type="text" placeholder="Search here..." />
														<div class="form-control-position navbar-search-close"><i class="ft-x">   </i></div>
													</div>
												</div>
											</form>
										</li>
									</ul>
								</li>
							</ul>
							<ul class="nav navbar-nav float-right">
								<li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-us"></i><span class="selected-language"></span></a>
									<div class="dropdown-menu" aria-labelledby="dropdown-flag">
										<div class="arrow_box"><a class="dropdown-item" href="/#"><i class="flag-icon flag-icon-us"></i> English</a><a class="dropdown-item" href="/#"><i class="flag-icon flag-icon-cn"></i> Chinese</a><a class="dropdown-item" href="/#"><i class="flag-icon flag-icon-ru"></i> Russian</a><a class="dropdown-item" href="/#"><i class="flag-icon flag-icon-fr"></i> French</a><a class="dropdown-item" href="/#"><i class="flag-icon flag-icon-es"></i> Spanish</a></div>
									</div>
								</li>
							</ul>
							<ul class="nav navbar-nav float-right">
								<li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="/#" data-toggle="dropdown"><i class="ficon ft-mail">             </i></a>
									<div class="dropdown-menu dropdown-menu-right">
										<div class="arrow_box_right"><a class="dropdown-item" href="/#"><i class="ft-book"></i> Read Mail</a><a class="dropdown-item" href="/#"><i class="ft-bookmark"></i> Read Later</a><a class="dropdown-item" href="/#"><i class="ft-check-square"></i> Mark all Read       </a></div>
									</div>
								</li>
								<li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="/#" data-toggle="dropdown">             <span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></a>
									<div class="dropdown-menu dropdown-menu-right">
										<div class="arrow_box_right"><a class="dropdown-item" href="/#"><span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><span class="user-name text-bold-700 ml-1">John Doe</span></span></a>
											<div class="dropdown-divider"></div><a class="dropdown-item" href="/#"><i class="ft-user"></i> Edit Profile</a><a class="dropdown-item" href="/#"><i class="ft-mail"></i> My Inbox</a><a class="dropdown-item" href="/#"><i class="ft-check-square"></i> Task</a><a class="dropdown-item" href="/#"><i class="ft-message-square"></i> Chats</a>
											<div class="dropdown-divider"></div><a class="dropdown-item" href="/#"><i class="ft-power"></i> Logout</a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>




			<div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
				<div class="navbar-header">
					<ul class="nav navbar-nav flex-row">
						<li class="nav-item mr-auto"><a class="navbar-brand" href="index.html"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
							<h3 class="brand-text">Ren-Banking</h3></a></li>
						<li class="nav-item d-md-none"><a class="nav-link close-navbar" href="/#"><i class="ft-x"></i></a></li>
					</ul>
				</div>
				<div class="main-menu-content">
					<ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
						<li class="active"><a href="index.html"><i class="ft-home"></i><span class="menu-title" data-i18n="">Dashboard</span></a>
						</li>
						<li class=" nav-item"><a href="charts.html"><i class="ft-pie-chart"></i><span class="menu-title" data-i18n="">Charts</span></a>
						</li>
						<li class=" nav-item"><a href="icons.html"><i class="ft-droplet"></i><span class="menu-title" data-i18n="">Icons</span></a>
						</li>
						<li class=" nav-item"><a href="cards.html"><i class="ft-layers"></i><span class="menu-title" data-i18n="">Cards</span></a>
						</li>
						<li class=" nav-item"><a href="buttons.html"><i class="ft-box"></i><span class="menu-title" data-i18n="">Buttons</span></a>
						</li>
						<li class=" nav-item"><a href="typography.html"><i class="ft-bold"></i><span class="menu-title" data-i18n="">Typography</span></a>
						</li>
						<li class=" nav-item"><a href="tables.html"><i class="ft-credit-card"></i><span class="menu-title" data-i18n="">Tables</span></a>
						</li>
						<li class=" nav-item"><a href="form-elements.html"><i class="ft-layout"></i><span class="menu-title" data-i18n="">Form Elements</span></a>
						</li>
						<li class=" nav-item"><a href="https://themeselection.com/demo/chameleon-admin-template/documentation"><i class="ft-book"></i><span class="menu-title" data-i18n="">Documentation</span></a>
						</li>
					</ul>
				</div>
				<div class="navigation-background"></div>
			</div>

			<div class="app-content content">
				<div class="content-wrapper">
					<div class="content-wrapper-before"></div>
					<div class="content-header row">
					</div>
					<div class="content-body">
						<div class="row match-height">
							<div class="col-12">
								<div class="">
									{/* <div id="gradient-line-chart1" class="height-250 GradientlineShadow1"></div> */}
									<h2 class="top-welcome-text">Welcome Emmanuel Aboderin!</h2>
								</div>
							</div>
						</div>

						<div class="row">
							<div class="col-xl-4 col-lg-6 col-md-12">
								<div class="card pull-up ecom-card-1 bg-white">
									<div class="card-content ecom-card2 height-180">
										<h5 class="text-muted danger position-absolute p-1">Available Balance</h5>
										<div>
											<i class="ft-pie-chart danger font-large-1 float-right p-1"></i>
										</div>
										<div class="progress-stats-container ct-golden-section height-75 position-relative pt-3  ">
											<div id="progress-stats-bar-chart"></div>
											<div className="available-balance">
												<h1># 5,600.38</h1>
											</div>
											<div id="progress-stats-line-chart" class="progress-stats-shadow"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-lg-6 col-md-12">
								<div class="card pull-up ecom-card-1 bg-white">
									<div class="card-content ecom-card2 height-180">
										<h5 class="text-muted info position-absolute p-1">Activity Stats</h5>
										<div>
											<i class="ft-activity info font-large-1 float-right p-1"></i>
										</div>
										<div class="progress-stats-container ct-golden-section height-75 position-relative pt-3">
											<div id="progress-stats-bar-chart1"></div>
											<div className="activity-stats">
												<h1>Last Login</h1>
												<p>12:00pm, Tuesday, 24th December, 2019</p>
											</div>
											<div id="progress-stats-line-chart1" class="progress-stats-shadow"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-4 col-lg-12">
								<div class="card pull-up ecom-card-1 bg-white">
									<div class="card-content ecom-card2 height-180">
										<h5 class="text-muted warning position-absolute p-1">Banking Info</h5>
										<div>
											<i class="lala-dashboard warning font-large-1 float-right p-1"></i>
										</div>
										<div class="progress-stats-container ct-golden-section height-75 position-relative pt-3">
											<div className="banking-info">
												<h4>Full Name</h4>
												<p>Aboderin Emmanuel Abolade</p>
												<div className="more-info">
													<p><span>Acc/No: </span>0123456789</p>
													<p><span>BVN No: </span>012345678</p>
												</div>
											</div>
											<div id="progress-stats-bar-chart2"></div>
											<div id="progress-stats-line-chart2" class="progress-stats-shadow"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="row match-height">

							<div class="col-xl-4 col-lg-12">
								<div class="card">
									<div class="card-header">
										<h4 class="card-title">Recent Transfers</h4>
										<a class="heading-elements-toggle" href="/#">
											<i class="fa fa-ellipsis-v font-medium-3"></i>
										</a>
										<div class="heading-elements">
											<ul class="list-inline mb-0">
												<li>
													<a data-action="reload" href="/#">
														<i class="ft-rotate-cw"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card-content">
										<div id="recent-buyers" class="media-list">
											<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-online">
														<img class="media-object rounded-circle" src="theme-assets/images/portrait/small/avatar-s-7.png" alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">Kristopher Candy

                            </span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> -#12,000 </span>
													</p>
												</div>
											</a>
											<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-away">
														<img class="media-object rounded-circle" src="theme-assets/images/portrait/small/avatar-s-8.png" alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">Lawrence Fowler

                            </span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> -#12,000 </span>
													</p>
												</div>
											</a>
											<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-busy">
														<img class="media-object rounded-circle" src="theme-assets/images/portrait/small/avatar-s-9.png" alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">Linda Olson

                            </span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> -#12,000 </span>
													</p>
												</div>
											</a>
											<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-online">
														<img class="media-object rounded-circle" src="theme-assets/images/portrait/small/avatar-s-10.png" alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">Roy Clark

                            </span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> -#12,000 </span>
													</p>
												</div>
											</a>
											<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-online">
														<img class="media-object rounded-circle" src="theme-assets/images/portrait/small/avatar-s-11.png" alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">Kristopher Candy

                            </span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> -#12,000 </span>
													</p>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-4 col-lg-12">
								<div class="card">
									<div class="card-header">
										<h4 class="card-title" id="heading-multiple-thumbnails">Quick Transfer</h4>
										<a class="heading-elements-toggle" href="/#">
											<i class="la la-ellipsis-v font-medium-3"></i>
										</a>
										<div class="heading-elements">
											<span class="avatar">
												<img src="theme-assets/images/portrait/small/avatar-s-2.png" alt="avatar" />
											</span>
											<span class="avatar">
												<img src="theme-assets/images/portrait/small/avatar-s-3.png" alt="avatar" />
											</span>
											<span class="avatar">
												<img src="theme-assets/images/portrait/small/avatar-s-4.png" alt="avatar" />
											</span>
										</div>
									</div>
									<div class="card-content">
										<div class="card-body">
											<form class="form">
												<div class="form-body">
													<div class="form-group">
														<label for="account_number" class="sr-only">First Name</label>
														<input type="text" id="account_number" class="form-control" placeholder="Account Number" name="account_number" />
													</div>
													<div className="pb-2 pl-2 pr-2">
														<p className="text-left account_name"></p>
													</div>
													<div class="form-group">
														<label for="transfer_amount" class="sr-only">Last Name</label>
														<input type="number" id="transfer_amount" class="form-control" placeholder="Enter Amount" name="transfer_amount" disabled/>
													</div>
													<div class="form-group">
														<label for="transfer_message" class="sr-only">Message</label>
														<textarea id="transfer_message" rows="5" class="form-control square" name="transfer_message" placeholder="Message" disabled></textarea>
													</div>
													<div class="form-actions center">
														<button type="submit" class="btn btn-outline-primary transfer-button" disabled>Send</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-4 col-lg-12">
								<div class="card">
									<div class="card-content">
										<div class="card-body">
											<h4 class="card-title">Recent products</h4>
											<h6 class="card-subtitle text-muted">Carousel Card With Header & Footer</h6>
										</div>
										<div id="carousel-area" class="carousel slide" data-ride="carousel">
											<ol class="carousel-indicators">
												<li data-target="#carousel-area" data-slide-to="0" class="active"></li>
												<li data-target="#carousel-area" data-slide-to="1"></li>
												<li data-target="#carousel-area" data-slide-to="2"></li>
											</ol>
											<div class="carousel-inner" role="listbox">
												<div class="carousel-item active">
													<img src="theme-assets/images/carousel/08.jpg" class="d-block w-100" alt="First slide" />
												</div>
												<div class="carousel-item">
													<img src="theme-assets/images/carousel/03.jpg" class="d-block w-100" alt="Second slide" />
												</div>
												<div class="carousel-item">
													<img src="theme-assets/images/carousel/01.jpg" class="d-block w-100" alt="Third slide" />
												</div>
											</div>
											<a class="carousel-control-prev" href="#carousel-area" role="button" data-slide="prev">
												<span class="la la-angle-left" aria-hidden="true"></span>
												<span class="sr-only">Previous</span>
											</a>
											<a class="carousel-control-next" href="#carousel-area" role="button" data-slide="next">
												<span class="la la-angle-right icon-next" aria-hidden="true"></span>
												<span class="sr-only">Next</span>
											</a>
										</div>
										<div class="card-body">
											<a href="/#" class="card-link">Card link</a>
											<a href="/#" class="card-link">Another link</a>
										</div>
									</div>
									<div class="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
										<span class="float-left">2 days ago</span>
										<span class="tags float-right">
											<span class="badge badge-pill badge-primary">Branding</span>
											<span class="badge badge-pill badge-danger">Design</span>
										</span>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>



			<footer class="footer footer-static footer-light navbar-border navbar-shadow">
				<div class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2"><span class="float-md-left d-block d-md-inline-block">2018  &copy; Copyright <a class="text-bold-800 grey darken-2" href="https://themeselection.com" target="_blank" rel="noopener noreferrer">ThemeSelection</a></span>
					<ul class="list-inline float-md-right d-block d-md-inline-blockd-none d-lg-block mb-0">
						<li class="list-inline-item"><a class="my-1" href="https://themeselection.com/" target="_blank" rel="noopener noreferrer"> More themes</a></li>
						<li class="list-inline-item"><a class="my-1" href="https://themeselection.com/support" target="_blank" rel="noopener noreferrer"> Support</a></li>
						<li class="list-inline-item"><a class="my-1" href="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/" target="_blank" rel="noopener noreferrer"> Purchase</a></li>
					</ul>
				</div>
			</footer>
		</div >
	)
}

export default App
