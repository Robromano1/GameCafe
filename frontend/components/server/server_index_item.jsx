import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			//Link to home page/servers/serverid
			<li id={this.props.server.id} className="server-li">
				<span classnName="hashtag">#</span>
				{this.props.server.name}
			</li>
		)
	}
}

export default ServerIndexItem;
