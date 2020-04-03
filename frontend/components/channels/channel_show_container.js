import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { getChannel, destroyChannel} from '../../actions/channel_actions';
import { fetchChannelMessages } from '../../actions/message_actions';


const mSTP = (state, ownProps) => {
	debugger
	return ({
		channel: state.entities.channels,
		messages: state.entities.messages,
		currentUser: state.session.id
	})
};

const mDTP = (dispatch) => ({
	getChannel: id => dispatch(getChannel(id)),
	//getUserChannel: userId => dispatch(getUserChannel(userId)),
	destroyChannel: id => dispatch(destroyChannel(id)),
	fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))
});

export default connect(mSTP, mDTP)(ChannelShow)