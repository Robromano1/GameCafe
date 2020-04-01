import { connect } from 'react-redux';
import ServerBar from './server_bar';
// import { logout } from '../../actions/session_actions';
import { getMessages, receiveMessage } from '../../actions/message_actions';
import { fetchUserServers } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id]
	//channelId: state.entities.users.channel_ids
});

const mDTP = dispatch => ({
	// logout: () => dispatch(logout()),
	//getMessages: () => dispatch(getMessages()),
	fetchUserServers: (userId) => dispatch(fetchUserServers(userId))
	
});

export default connect(mSTP, mDTP)(ServerBar)