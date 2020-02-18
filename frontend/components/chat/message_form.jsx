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
		App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
		this.setState({ body: "" });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.body}
						onchange={this.update("body")}
						placeholder="Message"
					/>
					<input type="submit"/>
				</form>
			</div>
		);
	}
}

export default MessageForm;