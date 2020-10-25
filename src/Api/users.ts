import axios from 'axios'
import {Dispatch} from 'react';

import {IUser, UsersAction} from '../Users/usersTypes';

import {
    getListUsers,
    getListUsersError,
    getListUsersSuccess, getUserError, getUserSuccess, requestGetUser,
    requestUpdateUser, updateUserError,
    updateUserSuccess
} from '../Users/actions/usersActions';

export function getUsers(): (dispatch: Dispatch<UsersAction>) => Promise<void> {
    return (dispatch: Dispatch<UsersAction>) => {
        dispatch(getListUsers())
        return axios.get(
            `http://localhost:3002/api/users`,
            {withCredentials: true}
        ).then(response => {
            dispatch(getListUsersSuccess(response.data))
        }).catch(error => {
            dispatch(getListUsersError(error))
        });
    }
}

export function getUser(id: string): (dispatch: Dispatch<UsersAction>) => Promise<void> {
    return (dispatch: Dispatch<UsersAction>) => {
        dispatch(requestGetUser())
        return axios.get(
            `http://localhost:3002/api/users/${id}`,
            {withCredentials: true}
        ).then(response => {
            dispatch(getUserSuccess(response.data))
        }).catch(error => {
            dispatch(getUserError(error))
        });
    }
}

export function getUpdateUser(
    id: string,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string
): (dispatch: Dispatch<UsersAction>) => Promise<void> {
    return (dispatch: Dispatch<UsersAction>) => {
        dispatch(requestUpdateUser())
        return axios.post(
            `http://localhost:3002/api/users/${id}`,
            {firstname, lastname, email, password},
            {withCredentials: true}
        ).then(response => {
            dispatch(updateUserSuccess(response.data))
        }).catch(error => {
            dispatch(updateUserError(error))
        });
    }
}

export function getConnectedUser(): Promise<IUser> {
    return axios.get(
        'http://localhost:3002/api/users/me',
        {withCredentials: true}
    ).then(res => res.data);
}

