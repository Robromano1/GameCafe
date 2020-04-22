import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER_CHANNELS = "UPDATE_USER_CHANNELS";
export const CLEAR_USER = "CLEAR_USER";


//session action creators
const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const clearUser = () => ({
    type: CLEAR_USER
});

export const updateUserChannels = (channelId, userId) => ({
    type: UPDATE_USER_CHANNELS,
    channelId,
    userId
})

//thunk action creators
export const signup = user => dispatch => (
    SessionApiUtil.signup(user)
        .then(userPayload => (dispatch(receiveCurrentUser(userPayload))),
        error => (dispatch(receiveErrors(error.responseJSON))))
);

export const login = user => dispatch => (
    SessionApiUtil.login(user)
        .then(userPayload => (dispatch(receiveCurrentUser(userPayload))),
        error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = () => dispatch =>(
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);