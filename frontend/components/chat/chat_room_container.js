import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { receiveMessage } from '../../actions/message_actions';


const mSTP = (state, ownProps) => {
	
	return {
		messages: Object.values(state.entities.messages),
		
	}

}

const mDTP = dispatch => ({
	receiveMessage: message => dispatch(receiveMessage(message))
})

export default connect(mSTP, mDTP)(ChatRoom)