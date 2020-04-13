import ServerForm from './server_form';
import { connect } from 'react-redux';
import { createServer } from '../../actions/server_actions';

const mSTP = state => ({
	server: {
		server_name: "",
		description: "",
		server_image: false,
		private: false,
		admin_id: "",
		channel_ids: []
	},
	formType: "Create"
});

const mDTP = dispatch => ({
	createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerForm);

