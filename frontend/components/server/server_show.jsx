import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelBarContainer from '../channels/channel_bar_container';
import ServerIndexContainer from '../server/server_index_container';

class ServerShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		const { getServerChannels, fetchServer } = this.props;
		// debugger
		const serverId = parseInt(this.props.match.params.serverId);
		// debugger
		if(serverId) {
			fetchServer(serverId)
				.then(() => getServerChannels(serverId));
		}

	}

	

	render() {
		//debugger
		if(Object.keys(this.props.server).length === 0) {
			return <></>;
		}
		return (
			<>
			{/* <div id="app-mount" className="appMount"> */}
					<div className="base">
						<div className="content-1">
							<div className="sidebar">
								<div className="serverChannels">
									<div className="searchBar">
										<button type="button" className="searchButton">Find or start a conversation</button>
									</div>
									<div className="scrollWrap scrollTheme">

									<ChannelBarContainer/>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/* </div> */}
			</>
		)
	}
	
}

export default withRouter(ServerShow);