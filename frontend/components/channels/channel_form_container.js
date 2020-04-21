import { connect } from 'react-redux'
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
	
	return {
		channels: Object.values(state.entities.channels)
	}	
};

const mDTP = (dispatch) => ({
	createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mSTP, mDTP)(ChannelForm);