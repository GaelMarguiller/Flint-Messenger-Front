import {combineReducers} from 'redux';
import {usersReducer} from './Users/reducers/usersReducer';
import {conversationsReducer} from "./Chat/reducer/chatReducer";

export const appReducer = combineReducers({
    users: usersReducer,
    conversations: conversationsReducer
})

export type IAppState = ReturnType<typeof appReducer>;
