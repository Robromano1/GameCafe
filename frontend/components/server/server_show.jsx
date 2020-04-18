import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelBarContainer from '../channels/channel_bar_container';
import ServerIndexContainer from '../server/server_index_container';

class ServerShow extends React.Component {
	constructor(props) {
		super(props);
	
	}

	componentDidMount() {

		const { getServerChannels, fetchServer } = this.props;
		const serverId = parseInt(this.props.match.params.serverId);
		
		if(serverId) {
			fetchServer(serverId)
				.then(() => getServerChannels(serverId));
		}

	}

	componentDidUpdate(prevProps) {
		
		if (prevProps.match.params.serverId != this.props.match.params.serverId) {	
			const { getServerChannels, fetchServer } = this.props;
			const serverId = parseInt(this.props.match.params.serverId);
		
			if (serverId) {
				fetchServer(serverId)
					.then(() => getServerChannels(serverId));
		}}
	}

	

	render() {
	
		if(Object.keys(this.props.server).length === 0) {
			return <></>;
		}
		return (
			<>
				<ChannelBarContainer/>
			</>
			
			
		)
	}
	
}

export default withRouter(ServerShow);