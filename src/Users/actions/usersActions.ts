import {
    CREATE_USER,
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    GET_LIST_USERS,
    GET_LIST_USERS_ERROR,
    GET_LIST_USERS_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    IUser,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS,
    UsersAction,
} from '../usersTypes';

export function requestCreateUser(): UsersAction {
    return {
        type: CREATE_USER,
        isFetching: true
    }
}

export function createUserSuccess(user: IUser): UsersAction {
    return {
        type: CREATE_USER_SUCCESS,
        isFetching: false,
        payload: {user}
    }
}

export function createUserError(error: string): UsersAction {
    return {
        type: CREATE_USER_ERROR,
        isFetching: false,
        error: error
    }
}

export function requestUpdateUser(): UsersAction {
    return {
        type: UPDATE_USER,
        isFetching: true
    }
}

export function updateUserSuccess(user: IUser): UsersAction {
    return {
        type: UPDATE_USER_SUCCESS,
        isFetching: false,
        payload: {user}
    }
}

export function updateUserError(error: string): UsersAction {
    return {
        type: UPDATE_USER_ERROR,
        isFetching: false,
        error: error
    }
}

export function getListUsers(): UsersAction {
    return {
        type: GET_LIST_USERS,
        isFetching: true
    }
}

export function getListUsersSuccess(list: IUser[]): UsersAction {
    return {
        type: GET_LIST_USERS_SUCCESS,
        isFetching: false,
        payload: {list}
    }
}

export function getListUsersError(error: string): UsersAction {
    return {
        type: GET_LIST_USERS_ERROR,
        isFetching: false,
        error: error
    }
}

export function requestGetUser(): UsersAction {
    return {
        type: GET_USER,
        isFetching: true
    }
}

export function getUserSuccess(user: IUser): UsersAction {
    return {
        type: GET_USER_SUCCESS,
        isFetching: false,
        payload: {user}
    }
}

export function getUserError(error: string): UsersAction {
    return {
        type: GET_USER_ERROR,
        isFetching: false,
        error: error
    }
}
