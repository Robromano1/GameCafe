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
		// debugger
		const serverId = parseInt(this.props.match.params.serverId);
		// debugger
		if(serverId) {
			fetchServer(serverId)
				.then(() => getServerChannels(serverId));
		}

	}

	componentDidUpdate(prevProps) {
		// debugger
		if (prevProps.match.params.serverId != this.props.match.params.serverId) {
			// debugger
			const { getServerChannels, fetchServer } = this.props;
			const serverId = parseInt(this.props.match.params.serverId);
		
			if (serverId) {
				fetchServer(serverId)
					.then(() => getServerChannels(serverId));
		}}
	}

	

	render() {
		//debugger
		if(Object.keys(this.props.server).length === 0) {
			return <></>;
		}
		return (
			// <div className="base">
			// 	<div className="content-1">
			// 		<div className="sidebar">
			// 			<div className="serverChannels">
			// 				<ChannelBarContainer/>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			<>
				<ChannelBarContainer/>
			</>
			
			
		)
	}
	
}

export default withRouter(ServerShow);