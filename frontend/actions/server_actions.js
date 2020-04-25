import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS ";
export const RECEIVE_SERVER = "RECEIVE_SERVER ";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RECEIVE_SERVER_USERS = 'RECEIVE_SERVER_USERS';
//action creators

const receiveAllServers = servers => ({
	type: RECEIVE_ALL_SERVERS,
	servers
});

const receiveServer = server => ({
	type: RECEIVE_SERVER,
	server
});

const removeServer = serverId => ({
	type: REMOVE_SERVER,
	serverId
})

const receiveServerErrors = errors => ({
	type: RECEIVE_SERVER_ERRORS,
	errors
});


//thunk actions
export const fetchServers = () => dispatch => (
	ServerApiUtil.fetchServers()
		.then(servers => dispatch(receiveAllServers(servers)))
);

export const fetchServer = id => dispatch => (
	ServerApiUtil.fetchServer(id)
		.then(server => dispatch(receiveServer(server)))
);

export const fetchUserServers = userId => dispatch => (
	ServerApiUtil.fetchUserServers(userId)
		.then(servers => dispatch(receiveAllServers(servers)))
);

export const createServer = server => dispatch => (
	ServerApiUtil.createServer(server)
		.then(server => dispatch(receiveServer(server)))
)

export const destroyServer = serverId => dispatch => (
	ServerApiUtil.deleteServer(serverId)
		.then(() => (dispatch(removeServer(serverId))))	
);

// export const deleteServer = serverId = dispatch => {
// 	return (
// 		ServerApiUtil.deleteServer(serverId)
// 			.then(() => dispatch(removeServer()))
// 	)
// };







