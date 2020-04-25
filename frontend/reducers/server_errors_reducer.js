import { RECEIVE_SERVER_ERRORS } from '../actions/server_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
	Object.freeze(state);
	let newState;

	switch(action.type) {
		case RECEIVE_SERVER_ERRORS:
			return action.errors;
		case CLEAR_ERRORS:
			newState = [];
			return newState;
		default: 
			return state;
	}
}