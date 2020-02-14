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
			<div className="Navi">
				<ul className="rightNav">
					<li className="download">Download</li>
					<div className="dropdown">
						<li className="developer">Developer</li>
						<div className="dropdown-content">
							<a href="https://github.com/robromano1">Github</a>
							<a href="https://www.linkedin.com/in/robert-romano/">LinkedIn</a>
						</div>
					</div>
					<li className="community">Community</li>
					<li className="support">Support</li>
				</ul>
				<ul className="leftNav">
					<li className="goLogin">
						{/* <button onClick={this.goToLogin}>LOGIN</button> */}
						<Link className="loginButton" to="/login">Login</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default NavBar;