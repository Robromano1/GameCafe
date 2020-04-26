import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelIndex from './channel_index';

class ChannelBar extends React.Component {
	constructor(props) {
		super(props);


	}

	// componentDidMount() {
	// 	// this.props.getUserChannels();
	// 	//this.props.getUserChannel(this.props.currentUser.id);
	// 	//<ServerBarContainer/>
	// 	//const { getServerChannels } = this.props;
	
	// 	//const serverId = this.props.match.params.serverId
	// 	// const serverId = Object.values(this.props.server)[0].id
		
	// 	// if (serverId) {
	// 	// 	getServerChannels(serverId);
	// 	// }
	// }

	render() {

		return (
			<>
				<ChannelIndexContainer />
			</>
		)
	}
}

export default withRouter(ChannelBar);