import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelBarContainer from '../channels/channel_index_container';
import ServerIndexContainer from '../server/server_index_container';

class ServerShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		const { getChannels, fetchServer } = this.props;
		debugger
		const serverId = parseInt(this.props.match.params.serverId);
		fetchServer(serverId);
	}

	

	render() {
		if(Object.keys(this.props.server).length === 0) {
			return <></>;
		}
		return (
			<ChannelBarContainer/>
		)
	}
	
}

export default withRouter(ServerShow);