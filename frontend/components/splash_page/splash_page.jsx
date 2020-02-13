import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class SplashPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		
		return (
			<div className="background">
					<div className="navi">
						<nav>This is the navbar</nav>
							<ul className="navItems">
								<li className="loginPage"><Link to="/login">Login</Link></li>
								<li className="linkedin"><a href="https://www.linkedin.com/in/robert-romano/">
									LinkedIn</a></li>
							</ul>
					</div>
					<div className="body">
						<h1>This is the body</h1>
					<p>Lorem Ipsum is simply dummy text of the 
						printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since 
						the 1500s, when an unknown printer took a galley of type and 
						scrambled it to make a type specimen book. It has survived not only 
						five centuries, but also the leap into electronic typesetting, 
						remaining essentially unchanged. It was popularised in the 1960s 
						with the release of Letraset sheets containing Lorem Ipsum passages, 
						and more recently with desktop publishing software like Aldus 
						PageMaker including versions of Lorem Ipsum.</p>
					</div>
			</div>
				// {/* <div className="background-img">
				// 	<img alt ="fox" src="https://images3.alphacoders.com/906/906873.jpg"/>
				// </div> */}
		)
	}
}

export default SplashPage;