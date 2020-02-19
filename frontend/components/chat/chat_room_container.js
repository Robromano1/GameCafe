import { connect } from 'react-redux';
import ChatRoom from './chat_room';

const mSTP = state => ({

})

const mDTP = dispatch => ({
	requestMessage: message => dispatch(requestMessages(message))
})

export default connect(mSTP, mDTP)(ChatRoom)