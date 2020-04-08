import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import ServerShowContainer from '../server/server_show_contianer';
import { getChannel } from '../../util/channel_api_util';
import App from '../app';

class ChannelShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		
		const { getChannel, fetchChannelMessages } = this.props;
		const channelId = parseInt(this.props.match.params.channelId);

		if (channelId) {
			getChannel(channelId)
				.then(() => fetchChannelMessages(channelId));
		}		
	}

	componentDidUpdate(prevProps) {
		
		if(prevProps.match.params.channelId != this.props.match.params.channelId) {
			
			const { getChannel, fetchChannelMessages } = this.props;
			const channelId = parseInt(this.props.match.params.channelId);
	
			if (channelId) {
				getChannel(channelId)
					.then(() => fetchChannelMessages(channelId));
			}
		}
	}

	render(){
		return (
			<div className="mainContent">
				<div className="chatRoom">
					<div className="chatroom-container">	
							<ChatRoomContainer/>
					</div>
				</div>
			</div>
					
		)
	}
}

export default withRouter(ChannelShow);