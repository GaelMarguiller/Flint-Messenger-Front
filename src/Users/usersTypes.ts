export interface IUsersListState {
    list: IUser[];
    isFetching: boolean;
    error: string;
}

export interface IUser {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
}

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const GET_LIST_USERS = 'GET_LIST_USERS';
export const GET_LIST_USERS_SUCCESS = 'GET_LIST_USERS_SUCCESS';
export const GET_LIST_USERS_ERROR = 'GET_LIST_USERS_ERROR';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR';

export interface ICreateUserAction {
    type: typeof CREATE_USER,
    isFetching: boolean
}

export interface ICreateUserSuccessAction {
    type: typeof CREATE_USER_SUCCESS,
    isFetching: boolean,
    payload : {
        user: IUser
    }
}

export interface ICreateUserErrorAction {
    type: typeof CREATE_USER_ERROR,
    isFetching: boolean,
    error : string
}

export interface IGetListUsersAction {
    type: typeof GET_LIST_USERS,
    isFetching: boolean,
}

export interface IGetListUsersSuccessAction {
    type: typeof GET_LIST_USERS_SUCCESS,
    isFetching: boolean,
    payload : {
        list: IUser[]
    }
}

export interface IGetListUsersErrorAction {
    type: typeof GET_LIST_USERS_ERROR,
    isFetching: boolean,
    error : string
}

export interface IGetUserAction {
    type: typeof GET_USER,
    isFetching: boolean,
}

export interface IGetUserSuccessAction {
    type: typeof GET_USER_SUCCESS,
    isFetching: boolean,
    payload : {
        user: IUser
    }
}

export interface IGetUserErrorAction {
    type: typeof GET_USER_ERROR,
    isFetching: boolean,
    error : string
}

export interface IUpdateUserAction {
    type: typeof UPDATE_USER,
    isFetching: boolean,
}

export interface IUpdateUserSuccessAction {
    type: typeof UPDATE_USER_SUCCESS,
    isFetching: boolean,
    payload : {
        user: IUser
    }
}

export interface IUpdateUserErrorAction {
    type: typeof UPDATE_USER_ERROR,
    isFetching: boolean,
    error : string
}

export type UsersAction =
    ICreateUserAction
    | ICreateUserSuccessAction
    | ICreateUserErrorAction
    | IUpdateUserAction
    | IUpdateUserSuccessAction
    | IUpdateUserErrorAction
    | IGetListUsersAction
    | IGetListUsersSuccessAction
    | IGetListUsersErrorAction
    | IGetUserAction
    | IGetUserSuccessAction
    | IGetUserErrorAction
