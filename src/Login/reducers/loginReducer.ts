import {ILoginState, LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LoginAction,} from '../loginTypes';

const defaultLoginState = {
    userId: '',
    isAuthenticated: false,
    isFetching: false,
    error: ''
}

export function loginReducer(state: ILoginState = defaultLoginState, action: LoginAction) : ILoginState {
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                isAuthenticated: action.payload.isAuthenticated,
                isFetching: action.isFetching,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
