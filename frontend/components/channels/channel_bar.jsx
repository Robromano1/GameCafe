import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelIndex from './channel_index';

class ChannelBar extends React.Component {
	constructor(props) {
		super(props);


	}

	componentDidMount() {
		// this.props.getUserChannels();
		//this.props.getUserChannel(this.props.currentUser.id);
		//<ServerBarContainer/>
		//const { getServerChannels } = this.props;
		//debugger
		//const serverId = this.props.match.params.serverId
		// const serverId = Object.values(this.props.server)[0].id
		// debugger
		// if (serverId) {
		// 	getServerChannels(serverId);
		// }
	}

	render() {
		return (
			// <div className="base">
			// 	<div className="content-1">
			// 		<div className="sidebar">
			// 			<div className="serverChannels">
			// 				<div className="searchBar">
			// 					<ChannelIndexContainer/>
			// 					<button type="button" className="searchButton">Find or start a conversation</button>
			// 				</div>
			// 				<div className="scrollWrap scrollTheme">
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
			<>
				<ChannelIndexContainer/>
			</>
		)
	}
}

export default withRouter(ChannelBar);