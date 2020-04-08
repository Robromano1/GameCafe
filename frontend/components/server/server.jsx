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
				{/* <ChatRoom /> */}
			</div>
		)
	}
}

export default ServerPage;

// 	render() {
// 		return (
// 			<div id="app-mount">
// 				<div className="app">
// 					<div className="serverBody">
// 						<div className="serverBackground"></div>
// 						<div className="serverLayers layer1">
// 							<div className="layer2 innerLayer">
// 								<div className="serverContainer">
// 									<nav className="serverWrapper servers">
// 										<div className="unreadMessagesTop">
// 											<div className="bar unreadMessagesBar active unread" style="transform: translateY(-180%);">
// 												::before 
// 												<span className="text"></span>
// 											</div>
// 										</div>
// 										<div className="scrollWrap scroll scrollTheme theme">
// 											<div className="scroller serverPad scroller2">
// 												<div className="listItem-2">
// 													<div className="pill pillWrapper"></div>
// 													<div className="listItemWrapper">
// 														<div className="wrapperSVG">
// 															<svg className="serverSVG"></svg>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="listItem-2">
// 													<div className="serverSeperator"></div>
// 												</div>
// 												<div className="listItem-2">
// 													<div className="pill2 pillWrapper">
// 														<span className="item"></span>
// 														<div className="blobContainer" draggable="true">
// 															<div className="wrapperSVG">
// 																<svg className="serverSVG"></svg>
// 															</div>
// 														</div>
// 														<div className="wrapper2">
// 															<span className="edge"></span>
// 															<span className="middle"></span>
// 															<span className="edge"></span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="listItem-2">
// 													<div className="pill2 pillWrapper">
// 														<span className="item"></span>
// 														<div className="blobContainer" draggable="true">
// 															<div className="wrapperSVG">
// 																<svg className="serverSVG"></svg>
// 															</div>
// 														</div>
// 														<div className="wrapper2">
// 															<span className="edge"></span>
// 															<span className="middle"></span>
// 															<span className="edge"></span>
// 														</div>
// 													</div>
// 												</div>
// 												<div className="listItem-2">
// 													<div className="pill2 pillWrapper">
// 														<span className="item"></span>
// 														<div className="blobContainer" draggable="true">
// 															<div className="wrapperSVG">
// 																<svg className="serverSVG"></svg>
// 															</div>
// 														</div>
// 														<div className="wrapper2">
// 															<span className="edge"></span>
// 															<span className="middle"></span>
// 															<span className="edge"></span>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</nav>
// 									{/* everything before this is server bar */}
// 									<div className="serverMid">
// 										<div className="content">
// 											<div className="sidebar">
// 												<div className="directMessages">
// 													<div className="searchBar">
// 														<button type="button" className="searchBarButton">Find or start a conversation</button>
// 													</div>
// 													<div className="scrollWrap scrollTheme theme scrollFade">
// 														<div className="scroller serverPad scroller2">
// 															<div style="width: 100%; height: 8px;"></div>
// 															<Link class="channel channelContainer" to="/channels/@me">
// 																<div className="channelLayout">
// 																	<div className="avatar">
// 																		<svg name="waving" className="buttonIcon">
// 																			{/* Add Icon here */}
// 																		</svg>
// 																	</div>
// 																	<div className="sidebarContent">
// 																		<div className="sidebarName">
// 																			<div className="name">Friends</div>
// 																		</div>
// 																	</div>
// 																</div>
// 															</Link>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default Server;