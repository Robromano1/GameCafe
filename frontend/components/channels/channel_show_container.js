import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { getChannel, destroyChannel} from '../../actions/channel_actions';
import { fetchChannelMessages } from '../../actions/message_actions';


const mSTP = (state, ownProps) => {
	
	return ({
		channels: Object.values(state.entities.channels),
		channel: state.entities.channels[ownProps.channelId],
		messages: state.entities.messages,
		currentUserId: state.session.id,
		currentUser: state.entities.users[state.session.id]
		
	})
};

const mDTP = (dispatch) => ({
	getChannel: id => dispatch(getChannel(id)),
	deleteChannel: id => dispatch(destroyChannel(id)),
	fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))
});

export default connect(mSTP, mDTP)(ChannelShow)