import React, { useEffect, useState } from 'react';
// import { authContext } from "../../context/authContext"
import checkReceiverExists from '../../apiservice/checkReceiverExist'
import transferMoney from '../../apiservice/transferMoney'
import { withRouter } from 'react-router-dom';

function Dashboard(props) {
	const [state, setState] = useState({
		senderAccountNumber: '',
		receiverAccountNumber: '2762203380',
		transferMessage: '',
		amountSent: ''
	})
	const [data, setData] = useState(JSON.parse(localStorage.user));
	// const { userInfo } = useContext(authContext)

	async function formSubmitHandler(evt) {
		evt.preventDefault();
		let token = '';
		if (localStorage.jwt) {
			token = JSON.parse(localStorage.getItem('jwt'))
		}

		if (!document.querySelector("#amount_sent").disabled && !document.querySelector("#transfer_message").disabled) {
			const result = await transferMoney({
				senderAccountNumber: state.senderAccountNumber,
				receiverAccountNumber: state.receiverAccountNumber,
				token: token.token,
				amountSent: state.amountSent,
				transferMessage: state.transferMessage
			})

			result.payload.lastLogin = new Date(result.payload.lastLogin).toGMTString()
			localStorage.setItem("user", JSON.stringify(result.payload));

			setData(result.payload)

			props.history.push('/')
			return;
		} else {
			if (state.senderAccountNumber === state.receiverAccountNumber) {
				document.querySelector(".error-text p").innerHTML = `You cannot send to yourself!`;
				document.querySelector(".error-text").style.display = "block";
				setTimeout(() => {
					document.querySelector(".error-text").style.display = "none";
					document.querySelector(".error-text p").innerHTML = ``;
				}, 3000);
				return;
			}
			const result = await checkReceiverExists({ 
				senderAccountNumber: state.senderAccountNumber, 
				receiverAccountNumber: state.receiverAccountNumber, 
				token: token.token 
			});

			if (result.payload) {
				document.querySelector(".account_name").innerHTML = `${result.payload.firstName} ${result.payload.middleName} ${result.payload.lastName}`;
				document.querySelector("#amount_sent").disabled = false;
				document.querySelector("#transfer_message").disabled = false;
				document.querySelector(".transfer-button").disabled = false;
			} else {
				document.querySelector("p.account_name").innerHTML = `Receiver not Found!`;
			}
			return;
		}
	}

	function fieldHandler(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});

		if (evt.target.name === "receiverAccountNumber") {
			if (evt.target.value.length === 10) {
				document.querySelector(".transfer-button").disabled = false;
			} else {
				document.querySelector(".transfer-button").disabled = true;
			}
		}
	}

	function currencyFormat(num) {
		if (num !== undefined && num !== "undefined" && num !== null && !isNaN(num)) {
			return '#' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		}
	}

	useEffect(() => {
		if (localStorage.user) {
			const user = JSON.parse(localStorage.user)
			setData(user)
			setState({
				...state,
				senderAccountNumber: data.accountNumber
			})
		}
		// eslint-disable-next-line
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
											<h1>{`${currencyFormat(data.balance)}`}</h1>
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
										{(data.transactions !== [])?
											(data.transactions.length > 10 ? data.transactions.splice(0,10): data.transactions).map((txn)=>
												<a href="/#" class="media border-0">
												<div class="media-left pr-1">
													<span class="avatar avatar-md avatar-online">
														<img class="media-object rounded-circle" src={`theme-assets/images/portrait/small/avatar-s-${Math.floor(Math.random()* 26) + 1}.png`} alt="Generic placeholder" />
														<i></i>
													</span>
												</div>
												<div class="media-body w-100">
													<span class="list-group-item-heading">{txn.receiverName}

															</span>
													<div class="list-unstyled users-list m-0 float-right">
														<i className="la la-angle-right"></i>
													</div>
													<p class="list-group-item-text mb-0">
														<span class="blue-grey lighten-2 font-small-3"> {currencyFormat(txn.amountSent)} </span>
													</p>
												</div>
											</a>
											)
										:
											<p>You have not made any transactions yet.</p>
										}
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
										<form class="form" onSubmit={formSubmitHandler}>
											<div class="form-body">
												<div className="pb-1 pl-2 pr-2 error-text">
													<b><p className="text-left"></p></b>
												</div>
												<div class="form-group" style={{ marginBottom: "5px" }}>
													<label for="account_number" class="sr-only">First Name</label>
													<input type="text" id="account_number" class="form-control" placeholder="Account Number" name="receiverAccountNumber" value={state.receiverAccountNumber} onChange={fieldHandler} />
												</div>
												<div className="pb-2 pl-2 pr-2">
													<b><p className="text-left account_name"></p></b>
												</div>
												<div class="form-group">
													<label for="amount_sent" class="sr-only">Last Name</label>
													<input type="number" id="amount_sent" class="form-control" placeholder="Enter Amount" name="amountSent" disabled value={state.amountSent} onChange={fieldHandler} />
												</div>
												<div class="form-group">
													<label for="transfer_message" class="sr-only">Message</label>
													<textarea id="transfer_message" rows="5" class="form-control square" name="transferMessage" placeholder="Message" disabled value={state.transferMessage} onChange={fieldHandler}></textarea>
												</div>
												<div class="form-actions center">
													<button type="submit" class="btn btn-outline-primary transfer-button" >Send</button>
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


export default withRouter(Dashboard);

