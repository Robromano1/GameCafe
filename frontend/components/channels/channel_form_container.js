import { connect } from 'react-redux'
import ChannelForm from './channel_form';

const mSTP = state => ({
	channel: {
		channel_name: "",
		description: ""
	}
});

const mDTP = (dispatch) => ({
	createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mSTP, mDTP)(ChannelForm);