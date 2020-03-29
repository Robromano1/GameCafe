import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchUserServers, fetchServers } from '../../actions/server_actions';
import { logout } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id],
	servers: state.entities.servers
});

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	fetchUserServers: (userId) => dispatch(fetchUserServers(userId))
});

export default connect(mSTP, mDTP)(ServerIndex);