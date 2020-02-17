import React from 'react';
import { Link } from 'react-router-dom';

class HomeFriendsList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="app-mount" className="appMount">
				{/* <div className="directMessages">
					<div className="searchBar">
						<button type="button" className="searchBarButton">Find or start a conversation</button>
					</div>
					<div className="scrollWrap scrollTheme theme scrollFade">
						<div className="scroll serverPad scroll2">
							<div style="width: 100%; height: 8px;"></div>
							<Link className="channel-2 container-2 selected" to="/">
								<div className="layout"></div>
							</Link>
						</div>
					</div>
				</div> */}
		  </div>
		)
	}
}

export default HomeFriendsList;