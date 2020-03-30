import React from 'react';
import { Link } from 'react-router-dom';
import ServerIndexContainer from './server_index_container'

class ServerShow extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		//when component mounts fetch channels for that server
		this.props.fetchServer();
		this.props.getChannels();
	}

	render() {
		return (
			<ServerIndexContainer/>
		)
	}
	
}

export default ServerShow;