import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	useHistory,
	useLocation
} from "react-router-dom";

import './App.css'
import Footer from "./components/Footer"
import PublicHeader from "./components/PublicHeader"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/pages/Dashboard"
import Login from './components/pages/Login'
import Register from './components/pages/Register'

import AuthContextProvider from './context/authContext'

function App() {
	return (
		<div className='App'>
			<AuthContextProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<LoginPage />
						</Route>
						<Route path="/public">
							<PublicPage />
						</Route>
						<Route path="/login">
							<LoginPage />
						</Route>
						<Route path="/register">
							<RegisterPage />
						</Route>
						<PrivateRoute exact path="/dashboard">
							<nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
								<div class="navbar-wrapper">
									<div class="navbar-container content">
										<div class="collapse navbar-collapse show" id="navbar-mobile">
											<ul class="nav navbar-nav mr-auto float-left">
												<li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="/#"><i class="ft-menu"></i></a></li>
											</ul>
											<ul class="nav navbar-nav float-right">
											</ul>
											<ul class="nav navbar-nav float-right">
												<li class="dropdown dropdown-notification nav-item"><a class="nav-link nav-link-label" href="/#" data-toggle="dropdown"><i class="ficon ft-mail">             </i></a>
													<div class="dropdown-menu dropdown-menu-right">
														<div class="arrow_box_right"><a class="dropdown-item" href="/#"><i class="ft-book"></i> Read Mail</a><a class="dropdown-item" href="/#"><i class="ft-bookmark"></i> Read Later</a><a class="dropdown-item" href="/#"><i class="ft-check-square"></i> Mark all Read       </a></div>
													</div>
												</li>
												<AuthButton />
											</ul>
										</div>
									</div>
								</div>
							</nav>
							<Sidebar />
							<Dashboard />
							<Footer />
						</PrivateRoute>
					</Switch>
				</Router>
			</AuthContextProvider >
		</div >
	)
}

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

function AuthButton() {
	let history = useHistory();

	return fakeAuth.isAuthenticated ? (
		<>
			<li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="/#" data-toggle="dropdown">             <span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><i></i></span></a>
				<div class="dropdown-menu dropdown-menu-right">
					<div class="arrow_box_right"><a class="dropdown-item" href="/#"><span class="avatar avatar-online"><img src="theme-assets/images/portrait/small/avatar-s-19.png" alt="avatar" /><span class="user-name text-bold-700 ml-1">Emmanuel</span></span></a>
						<div class="dropdown-divider"></div><a class="dropdown-item" href="/#"><i class="ft-user"></i> Edit Profile</a><a class="dropdown-item" href="/#"><i class="ft-mail"></i> My Inbox</a><a class="dropdown-item" href="/#"><i class="ft-check-square"></i> Task</a><a class="dropdown-item" href="/#"><i class="ft-message-square"></i> Chats</a>
						{/* <div class="dropdown-divider"></div><a class="dropdown-item" href="/#"><i class="ft-power"></i> Logout</a> */}
						<div class="dropdown-divider"></div><a class="dropdown-item" href="/#"><i class="ft-power"></i>
							<button
								onClick={() => {
									fakeAuth.signout(() => history.push("/"));
								}}
								style={{ border: "none" }}
							>
								Log out
      				</button>
						</a>
					</div>
				</div>
			</li>
		</>

	) : (
			<p style={{ padding: "1.7rem 1rem 1.6rem 1rem" }}>You are not logged in.</p>
		);
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: location }
							}}
						/>
					)
			}
		/>
	);
}

function PublicPage() {
	return <h3>Public</h3>;
}

function LoginPage() {
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: "/" } };
	let login = () => {
		fakeAuth.authenticate(() => {
			history.replace(from);
		});
	};

	return (
		<>
			<div className="public-header">
				<PublicHeader />
				<Login />
				<div>
					<a href="/register">
						<p>New to the App? Register</p>
					</a>
				</div>
				<div>
					<p>You must log in to view the page at {from.pathname}</p>
					<button onClick={login}>Log in</button>
				</div>
			</div>
		</>
	);
}

function RegisterPage() {
	return (
		<>
			<div className="public-header">
				<PublicHeader />
				<Register />
				<div>
					<a href="/login">
						<p>Not new? Login</p>
					</a>
				</div>
			</div>
		</>
	)
}

export default App
