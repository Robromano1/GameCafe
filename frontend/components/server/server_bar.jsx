import React from 'react';
import { Link } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import { withRouter } from 'react-router-dom';
import ServerIndexContainer from './server_index_container'

class ServerBar extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
	
		this.props.fetchUserServers(this.props.currentUser.id)
			.then(request => {
			
				if(!this.props.match.params.serverId) {
				
					this.props.history.push(`/channels/${Object.values(request.servers)[0].id}/${Object.values(request.servers)[0].channel_ids[0]}`)
				}
			});
	}

	render() {
	
		return (
			<ServerIndexContainer />
			
		)
	}
}

export default withRouter(ServerBar);