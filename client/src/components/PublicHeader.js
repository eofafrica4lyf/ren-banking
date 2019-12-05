import React from 'react'
// import AuthButton from './AuthButton'
// import fakeAuth from '../helpers/fakeAuth'

function PublicHeader() {
	return (
		<nav class="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
			<div class="navbar-wrapper">
				<div class="navbar-container content public-header">
					<div class="collapse navbar-collapse show" id="navbar-mobile">
						<div class="navbar-header">
							<ul class="nav navbar-nav flex-row">
								<li class="nav-item mr-auto"><a class="navbar-brand" href="/"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
									<h3 class="brand-text">Ren-Banking</h3></a></li>
								<li class="nav-item d-md-none"><a class="nav-link close-navbar" href="/#"><i class="ft-x"></i></a></li>
							</ul>
						</div>
						<ul class="nav navbar-nav mr-auto float-left">
							<li class="nav-item d-block d-md-none"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="/#"><i class="ft-menu"></i></a></li>

						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default PublicHeader
