import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelBarContainer from '../channels/channel_bar_container';
import ServerIndexContainer from '../server/server_index_container';
import BridgeContainer from '../bridge_container';

class ServerShow extends React.Component {
	constructor(props) {
		super(props);

		this.openDelete = this.openDelete.bind(this);
		this.closeDelete = this.closeDelete.bind(this);
		this.deleteServer = this.deleteServer.bind(this);
	
	}

	componentDidMount() {

		const { getServerChannels, fetchServer } = this.props;
		const serverId = parseInt(this.props.match.params.serverId);
		
		if(serverId) {
			fetchServer(serverId)
				.then(() => getServerChannels(serverId));
		}

	}

	componentDidUpdate(prevProps) {
		
		if (prevProps.match.params.serverId != this.props.match.params.serverId) {	
			const { getServerChannels, fetchServer } = this.props;
			const serverId = parseInt(this.props.match.params.serverId);
		
			if (serverId) {
				fetchServer(serverId)
					.then(() => getServerChannels(serverId));
		}}
	}

	openDelete(e) {
		e.stopPropagation();
		const deleteModal = document.getElementById("deleteModal");
    deleteModal.style.display = "block";
	}

	closeDelete(e) {
		if (e) {
			e.stopPropagation();
		}

		const deleteModal = document.getElementById("deleteModal");
		deleteModal.style.display = "none";
	}

	deleteServer() {
	
		const serverId = parseInt(this.props.location.pathname.split("/")[2]);
		const server = Object.values(this.props.server)[0].id;
		const channel = Object.values(this.props.server)[0].channel_ids[0];
		
		this.props.deleteServer(serverId)
			.then(() => {
				this.closeDelete();
				this.props.history.push(`/channels/${server}/${channel}`)
			});
	
	}

	

	render() {

		if(Object.keys(this.props.server).length === 0) {
			return <></>;
		}
		return (
			<>
				<div id="deleteModal" className="delete-modal">
					<div className="deleteModalContent">
						<h4 className="deleteServerHeader">DELETE SERVER</h4>
						<div className="deleteBody">
							Are you sure you want to delete this server?
							This cannot be undone.
						</div>
						<div className="deleteModalFooter">
							<div className="deleteModalBtns">
								<span className="deleteCloseBtn" onClick={this.closeDelete}>
									Cancel
								</span>
								<button type="submit" className="deleteServerBtn" onClick={this.deleteServer}>
									Delete Server
								</button>
							</div>
						</div>
					</div>
				</div>
				<ChannelBarContainer/>
			</>
			
			
		)
	}
	
}

export default withRouter(ServerShow);