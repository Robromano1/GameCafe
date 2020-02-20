import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.getUserChannels();
		this.props.getUserChannel(this.props.currentUser.id);

	}

	render() {
		
		return (
			<h1>This is the channel index</h1>
		)
	}
}

export default ChannelIndex;