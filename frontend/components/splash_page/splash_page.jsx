import React from 'react';
import { Link } from 'react-router-dom'

class SplashPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="body">
				<div className="navi">
					<nav>This is the navbar</nav>
						<ul>
							<li><a href="https://www.linkedin.com/in/robert-romano/">
								LinkedIn</a></li>
						</ul>
				</div>
				<div className="background-img">
					<img alt ="fox" src="https://images3.alphacoders.com/906/906873.jpg"/>
				</div>
			</div>
		)
	}
}

export default SplashPage;