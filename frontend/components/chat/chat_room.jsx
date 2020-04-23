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

	chatRoom(channelId) {

		// App.currentChannel = App.cable.subscriptions.create(
    //   { channel: "ChatChannel", id: this.props.match.params.channelId },
    //   {
    //     received: (data) => {
    //       // Instead of setting local this.state, dispatch action to update store

    //       this.props.receiveMessage(JSON.parse(data.message));
    //       // break
    //     },
    //     speak: function (data) {
    //       return this.perform("speak", data);
    //     },
    //   }
    // );
		
		App.currentChannel = App.cable.subscriptions.create(
			{
				channel: "ChatChannel",
				id: channelId,
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
		// App.currentChannel = App.cable.subscriptions.create(
		// 	{ channel: "ChatChannel", id: this.props.match.params.channelId },
		// 	{ 
		// 		received: data => {
		// 			// Instead of setting local this.state, dispatch action to update store
					
		// 			this.props.receiveMessage(JSON.parse(data.message));
		// 			// break
		// 		},
		// 		speak: function(data) {
		// 			return this.perform("speak", data);
		// 		}
		// 	}
		// );
		if (this.props.channelId) {

			this.chatRoom(this.props.channelId);
		}

	}

	componentDidUpdate(prevProps) {
		
		if (this.props.channelId && this.props.channelId !== prevProps.channelId) {
      if (App.currentChannel) {
        App.currentChannel.unsubscribe();
       
        this.chatRoom(this.props.channelId);
      }
    }

		
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
		let channel;
		if(this.props.channel) {
			channel = this.props.channel.channel_name
		}
	
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
				<div className="chatTitle">{channel}</div>
				
				<div className="message-list">
					{messageList}
				</div>
				<MessageForm />
			</>
		);
	}
}

export default withRouter(ChatRoom);