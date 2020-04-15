import ServerForm from './server_form';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

const mSTP = state => ({
	server: {
		server_name: "",
		description: "Change this description",
		server_image: true,
		admin_id: state.entities.users[state.session.id].id
	},
	
});

const mDTP = dispatch => ({
	createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerForm);

