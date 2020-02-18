import React from 'react';
import { Link } from 'react-router-dom';

class ServerBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			// <div>
			// 	<h1>I am from the server bar</h1>
			// </div>
			<div id="app-mount" className="appMount">
				{/* Side server scroll bar */}
				<div className="scrollWrap scrollTheme">
					<div className="scroll serverPad scroll2">
						<div className="listItem">
							<div className="pill-1 pillWrapper">
								<span className="item-2"></span>
							</div>
							<div className="listItemWrapper">
								<div className="logoWrapper">
									{/* Add logo image with link to home */}
								</div>
							</div>
						</div>					
						<div className="listItem">
							<div className="serverSeperator"></div>
						</div>
						<div className="listItem">
							<div className="pill-2 pillWrapper">
								<span className="item-2b"></span>
							</div>
							<div className="iconContainer" draggable="true">
								<div className="iconWrapper">
									<Link className="serverIconLink" to="/">
										<img className="svg-1" src="https://image.flaticon.com/icons/svg/1385/1385594.svg"/>
									</Link>
								</div>
							</div>
						</div>
						<div className="listItem">
							<div className="pill-2 pillWrapper">
								<span className="item-2b"></span>
							</div>
							<div className="iconContainer" draggable="true">
								<div className="iconWrapper">
									<Link className="serverIconLink" to="/">
										<img className="svg-1" src="https://image.flaticon.com/icons/svg/344/344757.svg"/>
									</Link>
								</div>
							</div>
						</div>
						<div className="listItem">
							<div className="pill-2 pillWrapper">
								<span className="item-2b"></span>
							</div>
							<div className="iconContainer" draggable="true">
								<div className="iconWrapper">
									<Link className="serverIconLink" to="/">
										<img className="svg-1" src="https://image.flaticon.com/icons/svg/1055/1055646.svg"/>
									</Link>
								</div>
							</div>
						</div>
						<div className="listItem addServer">
							<div>+</div>
						</div>
					</div>
				</div>
				{/* Base container  */}
				<div className="base">
					<div className="content-1">
						<div className="sidebar">
							<div className="serverChannels"></div>
						</div>
					</div>
				</div>
			</div>



			// <div id="app-mount" className="appMount">
			// 	<div className="scroll serverPad scroll2">
			// 		<div className="listItem">
			// 			<div className="pill-1 pillWrapper">
			// 				<span className="item-2"></span>
			// 			</div>
			// 			<div className="listItemWrapper">
			// 				<div className="innerWrapper">
			// 					<svg className="svg-1">
			// 						{/* Add image here */}
			// 						{/* Add link to home page when image is clicked */}
			// 					</svg>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div className="listItem">
			// 			<div className="serverSeperator"></div>
			// 		</div>
			// 		<div className="listItem">
			// 			<div className="pill-2 pillWrapper">
			// 				<span className="item-2b"></span>
			// 			</div>
			// 			<div className="blobContainer" draggable="true">
			// 				<div className="blobWrapper">
			// 					{/* <svg className="svg-1">
									
			// 					</svg> */}
			// 					<Link className="serverIconLink" to="/">
			// 						<img className="svg-1" src="https://image.flaticon.com/icons/svg/1385/1385594.svg"/>
			// 					</Link>
			// 				</div>
			// 				<div className="blobWrapper-2">
			// 					<span className="edge"></span>
			// 					<span className="middle"></span>
			// 					<span className="edge"></span>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div className="listItem">
			// 			<div className="pill-2 pillWrapper">
			// 				<span className="item-2b"></span>
			// 			</div>
			// 			<div className="blobContainer" draggable="true">
			// 				<div className="blobWrapper">
			// 					{/* <svg className="svg-1">
									
			// 					</svg> */}
			// 					<Link className="serverIconLink" to="/">
			// 						<img className="svg-1" src="https://image.flaticon.com/icons/svg/344/344757.svg"/>
			// 					</Link>
			// 				</div>
			// 				<div className="blobWrapper-2">
			// 					<span className="edge"></span>
			// 					<span className="middle"></span>
			// 					<span className="edge"></span>
			// 				</div>
			// 			</div>
			// 		</div>
			// 		<div className="listItem">
			// 			<div className="pill-2 pillWrapper">
			// 				<span className="item-2b"></span>
			// 			</div>
			// 			<div className="blobContainer" draggable="true">
			// 				<div className="blobWrapper">
			// 					{/* <svg className="svg-1">
									
			// 					</svg> */}
			// 					<Link className="serverIconLink" to="/">
			// 						<img className="svg-1" src="https://image.flaticon.com/icons/svg/1055/1055646.svg"/>
			// 					</Link>
			// 				</div>
			// 				<div className="blobWrapper-2">
			// 					<span className="edge"></span>
			// 					<span className="middle"></span>
			// 					<span className="edge"></span>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>

		)
	}
}

export default ServerBar;