import React, { Component } from 'react';
import {connect} from "react-redux";

import UsersListItem from './UsersListItem';

import { IUser } from '../usersTypes';

import { getUsers } from '../../Api/users';
import {IAppState} from "../../appReducer";



export interface IUserListProps {
    list: IUser[]
    getUsersListProps: () => void;
}

class UsersList extends Component<IUserListProps>{
    componentDidMount(){
        this.props.getUsersListProps()
    }

    render(){
        if(this.props.list.length === 0){
            return <h1>Loading</h1>
        } else {
            return this.props.list.map((user, index) => <UsersListItem key={index} user={user} />);
        }
    }
}

const mapStateToProps = (state: IAppState) => ({
    list: state.users.list
})


const mapDispatchToProps = (dispatch: any) => ({
    getUsersListProps: () => { dispatch(getUsers()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
