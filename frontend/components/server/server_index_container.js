import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchUserServers, fetchServers } from '../../actions/server_actions';
import { logout, clearUser } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id],
	servers: Object.values(state.entities.servers),
	currentServer: Object.values(state.entities.currentServer)[0]
});

const mDTP = dispatch => ({
	logout: () => dispatch(logout()),
	clearUser: () => dispatch(clearUser())
});

export default connect(mSTP, mDTP)(ServerIndex);