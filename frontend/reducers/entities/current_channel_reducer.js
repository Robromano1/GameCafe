import { RECEIVE_CHANNEL } from '../../actions/channel_actions';
import { merge } from 'lodash';

const currentChannelReducer = (state = {}, action) => {
	Object.freeze(state);
	
	switch (action.type) {
		case RECEIVE_CHANNEL:

			if (Object.values(state).length >= 1) {
				state = {};
			}
			return merge({}, state, { [action.channel.id]: action.channel });
		default:
			return state;
	}
}

export default currentChannelReducer;