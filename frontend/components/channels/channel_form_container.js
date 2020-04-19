import { connect } from 'react-redux'
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {

	return {
		// serverId: ownProps.match.params.serverId
	}	
};

const mDTP = (dispatch) => ({
	createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mSTP, mDTP)(ChannelForm);