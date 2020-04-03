import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import ServerShowContainer from '../server/server_show_contianer';
import { getChannel } from '../../util/channel_api_util';

class ChannelShow extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		debugger
		//fetch messages
		const { getChannel, fetchChannelMessages } = this.props;
		debugger
		const channelId = this.props.channel.id;
		//debugger
		if (channelId) {
			getChannel(channelId)
				.then(fetchChannelMessages(channelId));
		}
		
		
	}

	render(){
		return (
			<div className="mainContent">
				{/* <div className="chatRoom">
					<ChatRoomContainer />
				</div> */}
			</div>
		)
	}
}

export default withRouter(ChannelShow);