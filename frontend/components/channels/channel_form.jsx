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
			<div id="channelModal" className="channel-modal">
				<div className="ch-modal-content">
					<form className="channelModalForm">
						<h4 className="channelHeader">CREATE A TEXT CHANNEL</h4>
						<label>CHANNEL NAME
							<input
								type="text"
								className="serverName"
							/>
						</label>
						<div className="chFormFooter">
							<span className="chCloseBtn">
								Cancel
							</span>
							<button type="submit" className="channelSubmitBtn">
								Create Channel
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default withRouter(ChannelForm);