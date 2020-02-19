import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { requestMessages } from '../../actions/message_actions';

const mSTP = state => ({
	messages: state.entities.messages
})

const mDTP = dispatch => ({
	requestMessages: messages => dispatch(requestMessages(messages))
})

export default connect(mSTP, mDTP)(ChatRoom)