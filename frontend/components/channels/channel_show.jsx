import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import ServerShowContainer from '../server/server_show_contianer';

class ChannelShow extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		//fetch messages
		const { getMessages } = this.props;
		const channelId = this.props.channel.id;
		debugger
		if (channelId) {
			getMessages(channelId);
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