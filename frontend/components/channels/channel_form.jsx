import React from 'react'
import { withRouter } from 'react-router-dom';

class ChannelForm extends React.Component {
	constructor(props) {
		super(props)
	}

	openModal(e) {
		const modal = document.getElementById("channelModal");
		modal.style.display = "block";
	}

	closeModal(e) {
		const modal = document.getElementById("channelModal");
		modal.style.display = "none";
	}

	render() {
		return (
			<>
				
				<div id="channelModal" className="channel-modal">
					<div className="ch-modal-content">
						<form className="channelModalForm">
							<h4 className="channelHeader">CREATE TEXT CHANNEL</h4>
							<label className="channelName theme-dark">CHANNEL NAME
								<input
									type="text"
									className="channelInput"
								/>
							</label>
							<div className="chFormFooter">
								<div className="chFormBtns">
									<span className="chCloseBtn" onClick={this.closeModal}>
										Cancel
									</span>
									<button type="submit" className="channelSubmitBtn">
										Create Channel
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</>
		)
	}
}

export default withRouter(ChannelForm);