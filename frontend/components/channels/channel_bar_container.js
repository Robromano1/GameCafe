import ChannelBar from './channel_bar';
import { connect } from 'react-redux';
import { getServerChannels } from '../../actions/channel_actions';

const mSTP = state => {

	return ({
		server: Object.values(state.entities.servers),
		currentServer: Object.values(state.entities.currentServer)[0],
		currentUser: state.entities.users[state.session.id]
	})
};

const mDTP = dispatch => ({
	getServerChannels: serverId => dispatch(getServerChannels(serverId))
});

export default connect(mSTP, mDTP)(ChannelBar);