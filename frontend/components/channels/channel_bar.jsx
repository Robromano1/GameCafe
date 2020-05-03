import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';

class ChannelBar extends React.Component {
	constructor(props) {
		super(props);


	}

	render() {

		return (
			<>
				<ChannelIndexContainer />
			</>
		)
	}
}

export default withRouter(ChannelBar);