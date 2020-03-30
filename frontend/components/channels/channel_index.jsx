import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.getUserChannels();
		this.props.getUserChannel(this.props.currentUser.id);

	}

	render() {
		let { channels } = this.props;
		let serverChannels = [];
		channels.map(channel => {
			serverChannels.push(
				<li key={channel.id} id={channel.id}>
					{`${channel.channel_name}`}
				</li>
			)
		})
		
		return (
			<div className="channelIndexContainer">
				<div className="channelIndexWrapper">
					<div className="channels">
						<ul>
							{serverChannels}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(ChannelIndex);