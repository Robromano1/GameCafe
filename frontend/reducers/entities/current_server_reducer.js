import { RECEIVE_SERVER } from '../../actions/server_actions';
import { merge } from 'lodash';

const currentServerReducer = (state = {}, action ) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_SERVER:
			
			if (Object.values(state).length >= 1) {
				state = {};
			}
			return merge({}, state, { [action.server.id]: action.server });
	default:
		return state;
	}
}

export default currentServerReducer;
