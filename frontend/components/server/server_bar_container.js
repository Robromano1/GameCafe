import { connect } from 'react-redux';
import ServerBar from './server_bar';
// import { logout } from '../../actions/session_actions';
import { getMessages, receiveMessage } from '../../actions/message_actions';

const mSTP = (state, ownProps) => ({
	channelId: state.entities.users.channel_ids
});

const mDTP = dispatch => ({
	// logout: () => dispatch(logout()),
	getMessages: () => dispatch(getMessages()),
	
});

export default connect(mSTP, mDTP)(ServerBar)