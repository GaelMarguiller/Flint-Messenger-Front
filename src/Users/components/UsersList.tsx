import React, { Component } from 'react';

import UsersListItem from './UsersListItem';

import { IUser } from '../usersType';

import { getUsers } from '../../Api/users';

interface UsersListState {
    users: IUser[];
}

export default class UsersList extends Component<{}, UsersListState>{
    constructor(props: {}){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        getUsers().then(users =>{
            this.setState({
                users: users
            })
        })
    }

    render(){
        if(this.state.users.length === 0){
            return <h1>Loading</h1>
        } else {
            return this.state.users.map((user, index) => <UsersListItem key={index} user={user} />);
        }
    }
}
