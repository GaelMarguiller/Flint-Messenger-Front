import {combineReducers} from 'redux';
import {usersReducer} from './Users/reducers/usersReducer';
import {loginReducer} from './Login/reducers/loginReducer';

export const appReducer = combineReducers({
    login: loginReducer,
    users: usersReducer
})

export type IAppState = ReturnType<typeof appReducer>;
