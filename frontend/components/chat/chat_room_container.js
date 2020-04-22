import { connect } from 'react-redux';
import ChatRoom from './chat_room';
import { receiveMessage, fetchChannelMessages } from '../../actions/message_actions';
import { getChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
	debugger
	return {
		messages: Object.values(state.entities.messages),
		channel: state.entities.channels,
		user: state.entities.users[state.session.id],
		currentUserId: state.session.id,
		currentUser: state.entities.users[state.session.id]
		
	}

}

const mDTP = dispatch => ({
	receiveMessage: message => dispatch(receiveMessage(message)),
	getChannel: id => dispatch(getChannel(id)),
	fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))

})

export default connect(mSTP, mDTP)(ChatRoom)