import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChatRoomContainer from '../chat/chat_room_container';
import ServerShowContainer from '../server/server_show_contianer';
import { getChannel } from '../../util/channel_api_util';
import App from '../app';

class ChannelShow extends React.Component {
	constructor(props) {
		super(props);

		// this.chatRoom = this.chatRoom.bind(this);
	}

	// chatRoom() {
	// 	App.currentChannel = App.cable.subscription.create(
	// 		{
	// 			channel: "ChatChannel",
	// 			id: parseInt(this.props.match.params.channelId),
	// 			userId: this.props.currentUserId
	// 		},
	// 		{
	// 			received: data => {
	// 				switch (data.type) {
	// 					case 'message':
	// 						this.props.receiveMessage(JSON.parse(data.message));
	// 						break;
	// 				}
	// 			},
	// 			speak: function(data) { return this.perform('speak', data) },
	// 			load: function() { return this.perform('load') }
	// 		}
	// 	);
	// };

	componentDidMount() {
		// debugger
		//fetch messages
		const { getChannel, fetchChannelMessages } = this.props;
		// debugger
		const channelId = parseInt(this.props.match.params.channelId);
		//debugger
		// this.chatRoom();

		if (channelId) {
			getChannel(channelId)
				.then(() => fetchChannelMessages(channelId));
		}		
	}

	// componentDidUpdate(prevProps) {
	// 	if(!prevProps.channel || parseInt(this.props.match.params.channelId) !== prevProps.channel.id) {
	// 		if (App.currentChannel) {
	// 			App.currentChannel.unsubscribe();
	// 		}
	// 	}

	// 	this.chatRoom()
	// 	const channelId = this.props.match.params.channelId
	// 	this.props.getChannel(channelId)
	// 		.then(() => this.props.fetchChannelMessages(channelId))
	// }


	render(){
		return (
			//<></>
		<div className="appMount" id="app-mount">	
			<div className="base">
				<div>
					<div className="mainContent">
						<div className="chatRoom">
							<ChatRoomContainer/>
						</div>
					</div>
				</div>
			</div>
		</div>


			// <div id = "app-mount" className = "appMount">
			// 	<div className="base">
			// 		<div className="scrollWrap scrollTheme">
			// 			<div className="scroll serverPad scroll2">
			// 				<div className="content-1">
			// 					<div className="mainContent">
			// 						<div className="chatRoom">
			// 							<ChatRoomContainer/>
			// 						</div>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>	
			// <div id="app-mount" className="appMount">
			// 	<div className="base">
			// 		<div className="content-1">
			// 			<div className="mainContent">
			// 				<div className="chatRoom">
			// 					<ChatRoomContainer />
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
					
		)
	}
}

export default withRouter(ChannelShow);