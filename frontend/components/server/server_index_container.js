import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchUserServers } from '../../actions/server_actions';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id],
	servers: state.entities.servers
});

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	fetchUserServers: (serverIds) => dispatch(fetchUserServers(serverIds))
});

export default connect(mSTP, mDTP)(ServerIndex);