import  { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import messagesReducer from './entities/messages_reducer';
import channelsReducer from './entities/channels_reducer';

const entitiesReducer = combineReducers({
	users: usersReducer,
	messages: messagesReducer,
	channels: channelsReducer
});

export default entitiesReducer;