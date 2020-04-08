import React from 'react';
import { Route, Link } from 'react-router-dom';
import ServerBarContainer from './server_bar_container';
import ChatRoom from '../chat/chat_room';


class ServerPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		return (
			<div>
				<ServerBarContainer />
			</div>
		)
	}
}

export default ServerPage;