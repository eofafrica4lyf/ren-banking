import React, { useContext, useEffect, useState } from 'react';
import { authContext } from "../../context/authContext"

function Dashboard() {
	const [data, setData] = useState({});
	const { userInfo } = useContext(authContext)
	console.log(userInfo);

	useEffect(() => {
		if (localStorage.user) {
			setData(JSON.parse(localStorage.user))
		}
		console.log(data);
	}, [setData])

	return (
		<div class="app-content content">
			<div class="content-wrapper">
				<div class="content-wrapper-before"></div>
				<div class="content-header row">
				</div>
				<div class="content-body">
					<div class="row match-height">
						<div class="col-12">
							<div class="">
								<h2 class="top-welcome-text">Welcome {`${data.firstName} ${data.lastName}!`}</h2>
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
										{/* <div id="progress-stats-bar-chart"></div> */}
										<div className="available-balance">
											<h1>{`# ${data.balance}`}</h1>
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
											<p>{`${data.lastLogin}`}</p>
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
											<p>{`${data.firstName} ${data.middleName} ${data.lastName}`}</p>
											<div className="more-info">
												<p><span>Acc/No: </span>{`${data.accountNumber}`}</p>
												<p><span>BVN No: </span>{`${data.bvn}`}</p>
											</div>
										</div>
										{/* <div id="progress-stats-bar-chart2"></div> */}
										{/* <div id="progress-stats-line-chart2" class="progress-stats-shadow"></div> */}
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
													<input type="number" id="transfer_amount" class="form-control" placeholder="Enter Amount" name="transfer_amount" disabled />
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
									{/* <div class="card-body">
											<a href="/#" class="card-link">Card link</a>
											<a href="/#" class="card-link">Another link</a>
										</div> */}
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
	)
}

export default Dashboard

