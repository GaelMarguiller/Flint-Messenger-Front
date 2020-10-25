import axios from 'axios';
import {Dispatch} from 'react';

import {LoginAction} from '../Login/loginTypes';

import {
    loginError,
    loginSuccess,
    requestLogin,
} from '../Login/actions/loginActions';
import {createUserError, createUserSuccess, requestCreateUser} from '../Users/actions/usersActions';
import {UsersAction} from '../Users/usersTypes';

export function login(email: string, password: string): (dispatch: Dispatch<LoginAction>) => Promise<void> {
    return dispatch => {
        dispatch(requestLogin())
        return axios.post('http://localhost:3002/api/login/',
            {
                username: email,
                password: password
            },
            {
                withCredentials: true
            })
            .then(response => {
                dispatch(loginSuccess(true, response.data._id))
            })
            .catch(error => {
                dispatch(loginError(error))
            });
    }
}

export function registerUser(
    firstname: string,
    lastname: string,
    email: string,
    password: string
): (dispatch: Dispatch<UsersAction>) => Promise<void> {
    return dispatch => {
        dispatch(requestCreateUser())
        return axios.post(
            'http://localhost:3002/api/users',
            {firstname, lastname, email, password}
        ).then(response => {
            console.log(response.data)
            dispatch(createUserSuccess(response.data))
        })
        .catch(error => {
            dispatch(createUserError(error))
        });
    }
}
