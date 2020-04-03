import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { receiveMessages } from '../../actions/message_actions';


const mSTP = (state, ownProps) => {
	
	return {
		messages: Object.values(state.entities.messages),
		
	}

}

const mDTP = dispatch => ({
	receiveMessages: message => dispatch(receiveMessages(message))
})

export default connect(mSTP, mDTP)(ChatRoom)