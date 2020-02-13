import React from 'react';

class SplashPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="body">
				<div className="navi">
					<nav>This is the navbar</nav>
				</div>
				<div className="background">
					<img alt ="fox" src="https://images3.alphacoders.com/906/906873.jpg"/>
				</div>
			</div>
		)
	}
}

export default SplashPage;