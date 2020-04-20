import ServerShow from './server_show';
import { connect } from 'react-redux';
import { fetchServer, destroyServer, fetchUserServers } from '../../actions/server_actions';
import { getChannels, getServerChannels } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
	// debugger
	return ({
		server: state.entities.servers,
		// serverId: parseInt(ownProps.match.params.serverId),
		channels: state.entities.channels,
		users: state.entities.users,
		currentUserId: state.session.id,
		currentUser: state.entities.users[state.session.id]
	})
};

const mDTP = dispatch => ({
	fetchServer: id => dispatch(fetchServer(id)),
	deleteServer: serverId => dispatch(destroyServer(serverId)),
	getChannels: () => dispatch(getChannels()),
	fetchUserServers: (userId) => dispatch(fetchUserServers(userId)),
	getServerChannels: serverId => dispatch(getServerChannels(serverId))
});

export default connect(mSTP, mDTP)(ServerShow);