import React from 'react';
import ServerBarContainer from './server_bar_container';



class ServerPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
	
		return (
			<div>
				<ServerBarContainer />
			</div>
		)
	}
}

export default ServerPage;