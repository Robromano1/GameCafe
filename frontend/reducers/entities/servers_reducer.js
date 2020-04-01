import { RECEIVE_ALL_SERVERS, RECEIVE_USER_SERVERS, RECEIVE_SERVER, REMOVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash';

const serversReducer = (state = {}, action) => {
	// debugger
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_ALL_SERVERS:
			//  debugger
			return merge({}, action.servers);
		case RECEIVE_SERVER:
			
			return merge({}, state, {[action.server.id]: action.server});
		case REMOVE_SERVER: 
			newState = merge({}, state);
			delete newState[action.serverId];
			return newState;
		default:
			return state;
	}
}

export default serversReducer;
