import ChannelBar from './channel_bar';
import { connect } from 'react-redux';
import { getServerChannels } from '../../actions/channel_actions';

const mSTP = state => {
	debugger
	return ({
		server: Object.values(state.entities.servers)
	})
};

const mDTP = dispatch => ({
	getServerChannels: serverId => dispatch(getServerChannels(serverId))
});

export default connect(mSTP, mDTP)(ChannelBar);