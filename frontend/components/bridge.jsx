import React from 'react';
import { withRouter } from 'react-router-dom';

class Bridge extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.history.push('/channels')
	}
}

export default withRouter(Bridge);