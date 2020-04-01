import ServerShow from './server_show';
import { connect } from 'react-redux';
import { fetchServer, destroyServer, fetchUserServers } from '../../actions/server_actions';
import { getChannels } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
	debugger
	return ({
		server: state.entities.servers,
		servers: state.entities.servers,
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
	fetchUserServers: (userId) => dispatch(fetchUserServers(userId))
});

export default connect(mSTP, mDTP)(ServerShow);