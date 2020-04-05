import React from 'react';

//This component handles submissions of new messages

class MessageForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = { body: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return e => this.setState({ [field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		debugger
		App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
		this.setState({ body: "" });
	}

	render() {
		return (
			<div className="message-form-container">
				<form className="message-form" onSubmit={this.handleSubmit}>
					<input className="messageInput"
						type="text"
						value={this.state.body}
						onChange={this.update("body")}
						placeholder={`Message #${name}`}
					/>
				</form>
			</div>
		);
	}
}

export default MessageForm;