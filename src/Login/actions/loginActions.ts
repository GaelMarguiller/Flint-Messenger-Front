import {LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LoginAction} from "../loginTypes";

export function requestLogin(): LoginAction {
    return {
        type: LOGIN,
        isFetching: true
    }
}

export function loginSuccess(isAuthenticated: boolean, userId: string): LoginAction {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        payload: {isAuthenticated, userId}
    }
}

export function loginError(error: string): LoginAction {
    return {
        type: LOGIN_ERROR,
        isFetching: false,
        error: error
    }
}
