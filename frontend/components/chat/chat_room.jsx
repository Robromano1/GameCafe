import React from 'react';
import MessageForm from './message_form';
import { withRouter } from 'react-router-dom';

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);

		// this.state = { messages: this.props.messages };
		this.bottom = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		//Can have own component for App.cable.subscription
		App.currentChannel = App.cable.subscriptions.create(
			{ channel: "ChatChannel", id: this.props.match.params.channelId },
			{ 
				received: data => {
					// Instead of setting local this.state, dispatch action to update store
					
					// this.setState({
					// 	// messages: this.state.messages.concat(JSON.parse(data.message))
					// });
					//this.props.requestMessage(data.message)
					this.props.receiveMessage(JSON.parse(data.message))

				},
				speak: function(data) {
					return this.perform("speak", data);
				}
			}
		);

	}

	componentDidUpdate() {
		this.bottom.current.scrollIntoView();
	}

	handleSubmit(e) {
		e.preventDefault();
	}

	render() {
	
		const messageList = this.props.messages.map(message => {
			
			return (
				<li key={`${message.id}`} className="messageLi">
					{message.body}
					<div ref={this.bottom}/>
				</li>
			)
		});
		return (
			<div className="chatroom-container">
				<div>#general</div>
				<div className="message-list">{messageList}</div>
				<MessageForm />
			</div>
		);
	}
}

export default withRouter(ChatRoom);