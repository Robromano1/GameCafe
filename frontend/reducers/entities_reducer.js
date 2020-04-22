import  { combineReducers } from 'redux';
import usersReducer from './entities/users_reducer';
import messagesReducer from './entities/messages_reducer';
import channelsReducer from './entities/channels_reducer';
import serversReducer from './entities/servers_reducer'
import currentServerReducer from './entities/current_server_reducer';

const entitiesReducer = combineReducers({
	users: usersReducer,
	messages: messagesReducer,
	channels: channelsReducer,
	servers: serversReducer,
	currentServer: currentServerReducer
});

export default entitiesReducer;