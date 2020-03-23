import React from 'react';
import ServerIndexItem from './server_index_item';
import { Link } from 'react-router-dom';

class ServerIndex extends React.component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchUserServers(this.props.currentUser.id);
	}

	render() {
		return (
			//html for servers
			
		)
	}
}

export default ServerIndex;