import React, { Component } from 'react';
import { IUser } from '../usersType';

interface UsersListItemProps{
    user: IUser;
}

export default class UsersListItem extends Component<UsersListItemProps> {
    render(){
        return <h2>Un utilisateur</h2>
    }
}
