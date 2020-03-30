import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ChannelShow extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const { getChannel, getChannelMessages } = this.props;
		const channelId = this.props.match.params.channelId;

		getChannel(channelId).then(getChannelMessages(channeld));
		
	}
}

export default withRouter(ChannelShow);