import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.goToLogin = this.goToLogin.bind(this);

	}

	goHome(e) {
		e.preventDefault();
		
		this.props.history.push('/');
	}

	goToLogin(e) {
		e.preventDefault();
		// if (this.props.currentUser) {
		// 	this.props.history.push('/channels/currentUser');
		// } else {
		// 	this.props.history.push('/login');
		// }
		
		this.props.history.push('/login')
	}

	render() {
		return (
			<div id="app-mount">
				<div style={{height: "100%"}}>
					<div className="pageWrapper">
						<div className="posAbsolute headerTransparent headerForeground">
							<header className="header desktopHeader" >
								<nav className="innerHeader">
									<div className="headerLogo">
										<div>
											<a tabIndex="0" href="/">

											</a>
										</div>
									</div>
									<ul className="headerNav">
										<li tabIndex="-1" role="none" className="desktopSubMenu">
											<span className="desktopMenuMore" role="menuItem" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-controls="subMenuDropdown">
												Developer
												<img src="https://discordapp.com/assets/779a770c34fcb823a598a7277301adaf.svg" className="dropdownArrow" alt="openNav"/>
											</span>
											<ul id="subMenuDropdown" className="moreListItems moreList" role="menu" aria-label="Developer">
												<li className="navListItem menuListItem">
													<a className="navListLink" tabIndex="0" role="menuItem" href="https://github.com/Robromano1/Fullstack_Project_GameCafe">
														<span className="navListLinkCopy">Github</span>
													</a>
												</li>
												<li className="navListItem menuListItem">
													<a className="navListLink" tabIndex="0" role="menuItem" href="https://www.linkedin.com/in/robert-romano/">
														<span className="navListLinkCopy">LinkedIn</span>
													</a>
												</li>
											</ul>
										</li>
										<li className="desktopSubMenu">
											<span className="navListLinkCopy">Community</span>
										</li>
										<li className="desktopSubMenu">
											<span className="navListLinkCopy">Support</span>
										</li>
									</ul>
									<ul className="headerNavRight">
										<li className="navListItem menuListItem socialmediaListItem">
											<a className="rightNavLink-sub navLink" href="https://twitter.com/RobbyBizz" rel="me">
												<img src="https://discordapp.com/assets/efc9b24f5779403afd12f5fc8594497f.svg" alt="Robs twitter"/>
											</a>
										</li>
										<li className="navListItem menuListItem socialmediaListItem">
											<a className="rightNavLink-sub navLink" href="https://facebook.com" rel="me">
												<img src="https://discordapp.com/assets/9b3163fa3bb9d1eb2be647fed797a211.svg" alt="facebook"/>
											</a>
										</li>
										<li className="navListItem menuListItem socialmediaListItem">
											<a className="rightNavLink-sub navLink" href="https://instagram.com" rel="me">
												<img src="https://discordapp.com/assets/a9c828bc42fdacefb74f400a0b875e2e.svg" alt="instagram" />
											</a>
										</li>
										<li className="navListItem menuListItem goLogin">
											<Link className="loginButton" to="/login">Login</Link>
										</li>
									</ul>
								</nav>
								<div tabIndex="1"></div>
							</header>
						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default NavBar;



			// <div className="Navi">
			// 	<ul className="rightNav">
			// 		<li className="download">Download</li>
			// 		{/* <div className="dropdown">  */}
			// 		<li className="developer">Developer</li>
			// 			{/* <div className="dropdown-content">
			// 				<a href="https://github.com/robromano1">Github</a>
			// 				<a href="https://www.linkedin.com/in/robert-romano/">LinkedIn</a>
			// 			</div>
			// 		</div> */}
			// 		<li className="community">Community</li>
			// 		<li className="support">Support</li>
			// 	</ul>
			// 	<ul className="leftNav">
			// 		<li className="goLogin">
			// 			{/* <button onClick={this.goToLogin}>LOGIN</button> */}
			// 			<Link className="loginButton" to="/login">Login</Link>
			// 		</li>
			// 	</ul>
			// </div>