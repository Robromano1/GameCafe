import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			//Link to home page/servers/serverid
			// <Link to={`/channels/${this.props.channel.id}`}>
				<li key={`${this.props.server.id}`} id={this.props.server.id} className="server-li">
					<span className="hashtag">#</span>
					{this.props.server.name}
				</li>
			// </Link>
		)
	}
}

export default ServerIndexItem;
