import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndexItem extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
				<li key={`${this.props.server.id}`} id={this.props.server.id} className="server-li">
					<span className="hashtag">#</span>
					{this.props.server.name}
				</li>
		)
	}
}

export default ServerIndexItem;
