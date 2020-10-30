import axios from 'axios'
import { IUser } from '../Users/usersTypes';
import {getApiConnectedUser, getApiConversationSeen, getApiLogin, getApiUsersList} from "./apiUrl";

export function getUsers(): Promise<IUser[]> {
    return axios.get(getApiUsersList()).then(res => res.data);
}

export function getConnectedUser(): Promise<IUser>{
    return axios.get(
        getApiConnectedUser(),
        { withCredentials: true }
    ).then(res => res.data);
}

export function login(email: string, password: string): Promise<IUser>{
    return axios.post(
        getApiLogin(),
        {
            username: email,
            password: password,
            status: 'online',
        },
        {
            withCredentials: true
        }
    ).then(res => res.data)
}

export function register(email: string, firstname: string, lastname: string, password: string): Promise<IUser>{
    return axios.post(
        getApiUsersList(),
        { email, firstname, lastname, password },
        {
            withCredentials: true
        }
    ).then(res => res.data)
}

export function patchConversationSeen(conversationId: string){
    return axios.patch(
        getApiConversationSeen(),
        { conversationId },
        {
            withCredentials: true
        }
    ).then(res => res.data);
}

export default {
    getUsers,
    login,
    register,
    getConnectedUser
}
