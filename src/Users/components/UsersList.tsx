import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';
import { IAppState } from '../../appReducer';
import { IUser } from '../usersTypes';
import UsersListItem from './UsersListItem';

interface UsersListProps {
  users: IUser[];
  connectedUser?: IUser;
}

class UsersList extends React.Component<UsersListProps>{
  render(){
    if(this.props.users.length === 0){
      return <h1>Loading</h1>
    } else {
      return <List>
        {this.props.users.map((user, index) => <UsersListItem
            key={index}
            user={user}
            connectedUser={this.props.connectedUser}
        />)}
      </List>
    }
  }
}

const mapStateToProps = ({users} : IAppState) => ({
  users: users.list,
  connectedUser: users.connectedUser
});
export default connect(mapStateToProps)(UsersList);
