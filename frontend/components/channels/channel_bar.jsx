import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ChannelIndexContainer from './channel_index_container';
import ChannelIndex from './channel_index';

class ChannelBar extends React.Component {
	constructor(props) {
		super(props);


	}

	render() {
		return (
			<div className="base">
				<div className="content-1">
					<div className="sidebar">
						<div className="serverChannels">
							<div className="searchBar">
								<button type="button" className="searchButton">Find or start a conversation</button>
							</div>
							<div className="scrollWrap scrollTheme">
								<ChannelIndexContainer/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(ChannelBar);