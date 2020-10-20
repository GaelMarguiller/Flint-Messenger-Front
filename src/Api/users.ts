import axios from 'axios'
import { IUser } from '../Users/usersType';

export function getUsers(): Promise<IUser[]> {
    return axios.get('http://localhost:3002/api/users').then(res => res.data);
}

export function getConnectedUser(): Promise<IUser>{
    return axios.get(
        'http://localhost:3002/api/users/me',
        { withCredentials: true }
    ).then(res => res.data);
}
export function login(email: string, password: string): Promise<IUser>{
    return axios.post(
        'http://localhost:3002/api/login/',
        {
            username: email,
            password: password
        },
        {
            withCredentials: true
        }
    ).then(res => res.data)
}

export function registerUser(formValue: {}): Promise<string> {
    return axios.post(
        'http://localhost:3002/api/users',
        {...formValue}
    ).then(res => res.data)
}
