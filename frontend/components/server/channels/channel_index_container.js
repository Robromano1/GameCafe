import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { getChannels } from '../../../actions/channel_actions';

const mSTP = state => ({
	currentUser: state.entities.users[state.session.id],
	channels: state.entities.channels
});

const mDTP = dispatch => ({
	getChannels: () => dispatch(getChannels(channels)),
	getUserChannels: userId => dispatch(getUserChannels(userId))
}); 

export default connect(mSTP, mDTP)(ChannelIndex)