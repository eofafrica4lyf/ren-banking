import React from 'react'

function Sidebar() {
	return (
		<div class="main-menu menu-fixed menu-light menu-accordion    menu-shadow " data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
			<div class="navbar-header">
				<ul class="nav navbar-nav flex-row">
					<li class="nav-item mr-auto"><a class="navbar-brand" href="/"><img class="brand-logo" alt="Chameleon admin logo" src="theme-assets/images/logo/logo.png" />
						<h3 class="brand-text">Ren-Banking</h3></a></li>
					<li class="nav-item d-md-none"><a class="nav-link close-navbar" href="/#"><i class="ft-x"></i></a></li>
				</ul>
			</div>
			<div class="main-menu-content">
				<ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
					<li class="active"><a href="/"><i class="ft-home"></i><span class="menu-title" data-i18n="">Dashboard</span></a>
					</li>
				</ul>
			</div>
			<div class="navigation-background"></div>
		</div>
	)
}

export default Sidebar
