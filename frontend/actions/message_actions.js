import * as MessageAPIUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_CHANNEL_MESSAGES = "RECEIVE_CHANNEL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


//action creators
export const receiveMessages = (message) => ({
	type: RECEIVE_MESSAGES,
	message
}) 

export const receiveChannelMessages = messages => ({
	type: RECEIVE_CHANNEL_MESSAGES,
	messages
})

export const receiveMessage = (message) => ({
	type: RECEIVE_MESSAGE,
	message
})


//thunk action creators
export const fetchChannelMessages = (channelId) => dispatch => (
	MessageAPIUtil.fetchChannelMessages(channelId)
		.then(messages => dispatch(receiveChannelMessages(messages)))
);

