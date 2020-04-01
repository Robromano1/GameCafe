import * as ChannelApiUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const DELETE_CHANNEL = "DELETE_CHANNEL";

//action creators
const receiveChannels = channels => ({
	type: RECEIVE_CHANNELS,
	channels
});

const receiveChannel = channel => ({
	type: RECEIVE_CHANNEL,
	channel
});

const receiveErrors = errors => ({
	type: RECEIVE_CHANNEL_ERRORS,
	errors
});

const deleteChannel = id => ({
	type: DELETE_CHANNEL,
	id
});

//thunk action creators
export const getChannels = () => dispatch => (
	ChannelApiUtil.getChannels()
		.then(channels => {
			dispatch(receiveChannels(channels))
		},
			errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const getChannel = id => dispatch => (
	ChannelApiUtil.getChannel(id)
		.then(channel => {
			dispatch(receiveChannel(channel))
		},
			errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const getServerChannels = serverId => dispatch => (
	ChannelApiUtil.getServerChannels(serverId)
		.then(channels => dispatch(receiveChannels(channels)))
);

// export const getUserChannel = userId => dispatch => {
// 	return ChannelApiUtil.getUserChannels(userId)
// 		.then(channels => dispatch(receiveChannels(channels)),
// 			errors => dispatch(receiveErrors(errors.responseJSON)));
// };

export const createChannel = channel => dispatch => (
	ChannelApiUtil.createChannel(channel)
		.then(channel => {
			dispatch(receiveChannel(channel))
		},
			errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const destroyChannel = id => dispatch => {
	return ChannelApiUtil.deleteChannel(id)
		.then(channel => dispatch(deleteChannel(channel)),
			errors => dispatch(receiveErrors(errors.respinseJSON)));
};

