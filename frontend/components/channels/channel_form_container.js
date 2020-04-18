import { connect } from 'react-redux'
import ChannelForm from './channel_form';
import { createChannel } from '../../actions/channel_actions';

const mSTP = state => ({
	// channel: {
	// 	channel_name: "",
	// 	description: "Default description",
	// 	//servers: Object.values(state.entities.servers)
	// 	server_id: 47
	// }
});

const mDTP = (dispatch) => ({
	createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mSTP, mDTP)(ChannelForm);