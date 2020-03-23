import { connect } from 'react-redux';
import ServerIndex from './server_index';
import { fetchUserServers } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id],
	servers: state.entities.servers
});

const mDTP = dispatch => ({
	fetchUserServers: (serverIds) => dispatch(fetchUserServers(serverIds))
});

export default connect(mSTP, mDTP)(ServerIndex);