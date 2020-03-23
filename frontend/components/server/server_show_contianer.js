import ServerShow from './server_show';
import { connect } from 'react-redux';
import { fetchServer, deleteServer } from '../../actions/server_actions';
import { getChannels } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => ({
	server: server.entities.servers[ownProps.match.params.serverId],
	channels: state.entities.channels,
	users: state.entities.users,
	currentUserId: state.session.id
});

const mDTP = dispatch => ({
	fetchServer: id => dispatch(fetchServer(id)),
	deleteServer: serverId => dispatch(deleteServer(serverId)),
	getChannels: () => dispatch(getChannels())
});

export default connect(mSTP, mDTP)(ServerShow);