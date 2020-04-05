import React from 'react';
import ServerBarContainer from '../server/server_bar_container';
import ChannelBarContainer from '../channels/channel_bar_container';
import ServerShowContainer from '../server/server_show_contianer';
import ChannelShowContainer from '../channels/channel_show_container';
import { Route, Switch } from 'react-router-dom';

const Channels = props => {
	return (
		<>
			<Route exact path={['/channels', '/channels/:serverId', '/channels/:serverId/:channelId']}
				component={ServerBarContainer}
			/>
			<Route path="/channels/:serverId" component={ServerShowContainer}/>
			<Route path="/channels/:serverId/:channelId" component={ChannelBarContainer}/>
		</>
	)
}

export default Channels;