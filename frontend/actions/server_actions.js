import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS ";
export const RECEIVE_SERVER = "RECEIVE_SERVER ";
export const RECEIVE_USER_SERVERS = "RECEIVE_USER_SERVERS";
export const REMOVE_SERVER = "REMOVE_SERVER";

//action creators

const receiveAllServers = servers => ({
	type: RECEIVE_ALL_SERVERS,
	servers
});

const receiveServer = server => ({
	type: RECEIVE_SERVER,
	server
});

const receiveUserServers = userId => ({
	type: RECEIVE_USER_SERVERS,
	userId
});

const removeServer = serverId => ({
	type: REMOVE_SERVER,
	serverId
})


//thunk actions
export const fetchServers = servers => dispatch => (
	ServerApiUtil.fetchServers(servers)
		.then(servers => dispatch(receiveAllServers(servers)))
);

export const fetchServer = id => dispatch => (
	ServerApiUtil.fetchServer(id)
		.then(server => dispatch(receiveServer(server)))
);

export const fetchUserServers = userId => dispatch => (
	ServerApiUtil.fetchUserServers(userId)
		.then(userServers => dispatch(receiveUserServers(userServers)))
);

export const deleteServer = serverId = dispatch => (
	ServerApiUtil.deleteServer(serverId)
		.then(() => dispatch(removeServer()))
);







