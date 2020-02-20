import * as MessageAPIUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";


//action creators
export const receiveMessages = messages => ({
	type: RECEIVE_MESSAGES,
	messages
})

export const receiveMessage = message => ({
	type: RECEIVE_MESSAGE,
	message
})


//thunk action creators
export const getMessages = () => dispatch => (
	MessageAPIUtil.getMessages()
		.then(messages => dispatch(receiveMessages(messages)))
);

