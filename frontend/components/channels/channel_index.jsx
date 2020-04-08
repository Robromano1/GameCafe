import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelShowContainer from './channel_show_container';
import ServerBarContainer from '../server/server_bar_container';

class ChannelIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	// this.props.getUserChannels();
	// 	//this.props.getUserChannel(this.props.currentUser.id);
	// 	//<ServerBarContainer/>
	// 	const { getServerChannels } = this.props;
	
	// 	const serverId = this.props.match.params.serverId
	// 	if (serverId) {
	// 		getServerChannels(serverId);
	// 	}
	// }

	render() {
		let { channels } = this.props;
		let serverChannels = [];
	
		channels.map(channel => {
			serverChannels.push(
				<li className="channelList" key={channel.id} id={channel.id}>
					{`${channel.channel_name}`}
				</li>
			)
		})
		
		return (
			// <div>
			// 	<ul>
			// 		{serverChannels}
			// 	</ul>
			// 	<ChannelShowContainer/>
			// </div>
			<div className="base">
				<div className="content-1">
					<div className="sidebar">
						<div className="serverChannels">
							<ul>
								{serverChannels}
							</ul>
						</div>
					</div>
					<ChannelShowContainer/>z
				</div>
			</div>
			// <>
			// 	<div className="channelIndexContainer">
			// 		<div className="channelIndexWrapper">
			// 			<div className="channels">
			// 				<ul>
			// 					{serverChannels}
			// 				</ul>
			// 			</div>
			// 		</div>
			// 	</div>
			// 	<div className="channelShow">
			// 		<ChannelShowContainer/>
			// 	</div> 
			// </>
			// <div className="base">
			// 	<div className="content-1">
			// 		<div className="sidebar">
			// 			<div className="serverChannels">
			// 				<div className="searchBar">
			// 					<ul>
			// 						{serverChannels}
			// 					</ul>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<ChannelShowContainer/>
			// 	</div>
			// </div>
		)
	}
}

export default withRouter(ChannelIndex);