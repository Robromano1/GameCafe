import React from 'react';
import MessageForm from './message_form';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);

		// this.state = { messages: this.props.messages };
		this.bottom = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.chatRoom = this.chatRoom.bind(this);
	}

	chatRoom() {
		
		App.currentChannel = App.cable.subscriptions.create(
			{
				channel: "ChatChannel",
				id: parseInt(this.props.match.params.channelId),
				userId: this.props.currentUserId
			},
			{
				received: data => {
					switch (data.type) {
						case 'message':
							this.props.receiveMessage(JSON.parse(data.message));
							break;
					}
				},
				speak: function (data) { return this.perform('speak', data) },
				load: function () { return this.perform('load') }
			}
		);
	};

	componentDidMount() {
		//Can have own component for App.cable.subscription
		App.currentChannel = App.cable.subscriptions.create(
			{ channel: "ChatChannel", id: this.props.match.params.channelId },
			{ 
				received: data => {
					// Instead of setting local this.state, dispatch action to update store
					
					this.props.receiveMessage(JSON.parse(data.message))
					// break
				},
				speak: function(data) {
					return this.perform("speak", data);
				}
			}
		);

	}

	componentDidUpdate() {
	
		if (this.bottom) {
			this.bottom.current.scrollIntoView();
		}
	}

	componentDidUpdate(prevProps) {
		if (!prevProps.channel || parseInt(this.props.match.params.channelId) !== prevProps.channel.id) {
			if (App.currentChannel) {
				App.currentChannel.unsubscribe();
			}
		}

		this.chatRoom()
	
		if (this.bottom.current) {
			this.bottom.current.scrollIntoView();
		}
		// const channelId = this.props.match.params.channelId
		// this.props.getChannel(channelId)
		// 	.then(() => this.props.fetchChannelMessages(channelId))
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
		
		let messageList;
		if (this.props.messages && this.props.user){
			messageList = this.props.messages.map(message => {
				
				return (
					<div key={`${message.id}`} className="messageLi">
						<div className="username">
							{message.user.username}
						</div>
						{message.body}
						<div ref={this.bottom}/>
					</div>
				)
			});
		}
	
		return (
			<>
				<div className="chatTitle">Welcome</div>
				
				<div className="message-list">
					{messageList}
				</div>
				<MessageForm />
			</>
		);
	}
}

export default withRouter(ChatRoom);