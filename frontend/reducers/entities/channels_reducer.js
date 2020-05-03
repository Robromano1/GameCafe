import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, DELETE_CHANNEL } from '../../actions/channel_actions';
import { UPDATE_USER_CHANNELS } from '../../actions/session_actions';
import { merge } from 'lodash';

const channelsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_CHANNELS:
			newState = merge({}, action.channels);
			return newState;
		case RECEIVE_CHANNEL:
			newState = merge({}, state, { [action.channel.id]: action.channel });
			return newState;
		case DELETE_CHANNEL:
			newState = merge({}, state);
			delete newState[action.channelId]
			return newState;
		default:
			return state
	}
}

export default channelsReducer;

