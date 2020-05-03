import ServerForm from './server_form';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

const mSTP = state => ({
	server: {
		server_name: "",
		description: "Change this description",
		server_image: true
	},
	servers: Object.values(state.entities.servers),
	channels: Object.values(state.entities.channels),
	currentServer: Object.values(state.entities.currentServer)[0]
	
});

const mDTP = dispatch => ({
	createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerForm);

