import { connect } from 'react-redux';
import ChannelShow from './channel_show';
import { getChannel, getUserChannel, destroyChannel} from '../../../actions/channel_actions';
import { getChannelMessages } from '../../../actions/message_actions';
import { getChannels } from '../../../util/channel_api_util';

const mSTP = (state, ownProps) => ({
	channel: state.entities.channels[ownProps.params.match.channelId],
	messages: state.entities.messages,
	currentUser: state.session.id
});

const mDTP = (dispatch) => ({
	getChannel: id => dispatch(getChannel(id)),
	getUserChannel: userId => dispatch(getUserChannel(userId)),
	destroyChannel: id => dispatch(destroyChannel(id)),
	getChannelMessages: channelId => dispatch(getChannelMessages(channelId))
});

export default connect(mSTP, mDTP)(ChannelShow)