import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component {
	constructor(props) {
		super(props);

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

	handleSubmit() {

	}

	update() {

	}

	openModal() {
		const modal = document.getElementById('serverModal')
		modal.style.display = 'block';
	};

	closeModal(){
		const modal = document.getElementById('serverModal')
		modal.style.display = 'none';
	}

	render() {
		return(
			<>
				<button id="modalBtn" className="modal-button" onClick={this.openModal}>+</button>
				<div id="serverModal" className="modal">
					<div className="modal-content">
						<form className="modalForm" >
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