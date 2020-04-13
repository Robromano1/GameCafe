import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.server;

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.createServer(this.state)
			.then(this.props.history.push('/channels'))
	};

	update(field) {
		e => this.setState({[field]: e.target.value})
	};

	openModal(e) {
		const modal = document.getElementById('serverModal')
		modal.style.display = 'block';
		// e.stopPropagation();

		// const modalNode = document.getElementsByClassName('modal')[0];
		// if (!modalNode.classList.contains('openModal')) {
		// 	modalNode.classList.add('openModal')
		// } else {
		// 	modalNode.classList.remove('openModal')
		// }
	};

	closeModal(e){
		// // e.preventDefault();
		const modal = document.getElementById('serverModal')
		// debugger
		modal.style.display = 'none';

		// e.stopPropagation();

		// const modalNode = document.getElementsByClassName('modal')[0];
		// if (!modalNode.classList.contains('closeModal')) {
		// 	modalNode.classList.add('closeModal')
		// } else {
		// 	modalNode.classList.remove('closeModal')
		// }
	}

	// toggleServerModal(e) {
	// 	e.stopPropagation();

	// 	const modalNode = document.getElementsByClassName('modalWrapper')[0];
	// 	if(!modalNode.classList.contains('modal-content')) {
	// 		modalNode.classList.add('modal-content')
	// 	} else {
	// 		modalNode.classList.remove('modal-content')
	// 	}
	// }

	render() {
		return(
			<>
				{/* <button id="modalBtn" className="modal-button" onClick={this.openModal}>+</button> */}
				<div id="serverModal" className="modal">
					<div className="modal-content">
						<form className="modalForm" onSubmit={this.handleSubmit} >
							<h5 className="serverHeader">CREATE YOUR SERVER</h5>
							<p className="serverBody">By Creating a server you will have 
								access to free text chat amongst your friends.
							</p>
							<label>SERVER NAME
								<input type="text"
											 className="serverName"
											 placeholder="Enter a server name"
								/>
							</label>
							<div className="formFooter">
								<span className="closeBtn" onClick={this.closeModal}>BACK</span>
								<button type="submit" className="serverSubmitBtn">Create</button>
							</div>
						</form>
						
					</div>
				</div>
			</>
		)
	}
}

export default withRouter(ServerForm);