import React from 'react';
import { Link } from 'react-router-dom';

class ServerShow extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		//when component mounts fetch channels for that server
		this.props.fetchServer();
		this.props.getChannels();
		

	}
	
}

export default ServerShow;