import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import NavBarContainer from '../navbar/navbar_container';
import BodyContainer from '../body/body_container';
import FooterContainer from '../footer/footer_container';

class SplashPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		
		return (
			<div>
				<Route path="/" component={NavBarContainer}/>
				<Route path="/" component={BodyContainer}/>
				<Route path="/" component={FooterContainer}/>
			</div>
		)
	}
}

export default SplashPage;