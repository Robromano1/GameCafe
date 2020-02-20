import { RECEIVE_CURRENT_USER, RECEIVE_USERS, UPDATE_USER_CHANNELS } from '../../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action ) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_CURRENT_USER:
			newState = merge({}, state, { [action.currentUser.id]: action.currentUser });
			return newState;
		case RECEIVE_USERS:
			newState = merge({}, state)
			Object.keys(action.users).forEach(userId => newState[userId] = action.users[userId]);
			return newState;
		// case UPDATE_USER_CHANNELS:
		// 	newState = merge({}, state);
		// 	if(!newState[action.userId].channel_ids.includes(action.channelId)) {
		// 		newState[action.userId].channel_ids.push(action.channelId);
		// 	}
			// return newState;
		default:
			return state;

	}
}

export default usersReducer;