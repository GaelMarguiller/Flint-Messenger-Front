import { IUpdateUsersAction, IUser, UPDATE_USERS } from '../usersTypes';

export function updateUsers(users: IUser[]) : IUpdateUsersAction{
  return {
    type: UPDATE_USERS,
    users: users
  }
}
