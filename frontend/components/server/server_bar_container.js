import { connect } from 'react-redux';
import ServerBar from './server_bar';
import { getMessages, receiveMessage } from '../../actions/message_actions';
import { fetchUserServers } from '../../actions/server_actions';

const mSTP = (state, ownProps) => ({
	currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
	fetchUserServers: (userId) => dispatch(fetchUserServers(userId))
	
});

export default connect(mSTP, mDTP)(ServerBar)