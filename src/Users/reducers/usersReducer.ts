import {
    IUsersListState,
    UsersAction,
    GET_LIST_USERS,
    GET_LIST_USERS_ERROR,
    GET_LIST_USERS_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    UPDATE_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_ERROR,
} from '../usersTypes';

const defaultUsersListState = {
    list: [],
    isFetching: false,
    error: ''
}

export function usersReducer(state: IUsersListState = defaultUsersListState, action: UsersAction) : IUsersListState {
    switch(action.type){
        case CREATE_USER:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                ...state
            }
        case CREATE_USER_SUCCESS:
            return {
                list: [ ...state.list, action.payload.user  ],
                isFetching: action.isFetching,
                error: state.error
            }
        case CREATE_USER_ERROR:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: action.error
            }
        case UPDATE_USER: {
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                ...state
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                list: [ ...state.list, action.payload.user  ],
                isFetching: action.isFetching,
                ...state
            }
        }
        case UPDATE_USER_ERROR:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: action.error
            }
        case GET_LIST_USERS:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: state.error
            }
        case GET_LIST_USERS_SUCCESS:
            return {
                list: [ ...state.list, ...action.payload.list ],
                isFetching: action.isFetching,
                error: state.error
            }
        case GET_LIST_USERS_ERROR:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: action.error
            }
        case GET_USER:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: state.error
            }
        case GET_USER_SUCCESS:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: state.error
            }
        case GET_USER_ERROR:
            return {
                list: [ ...state.list ],
                isFetching: action.isFetching,
                error: action.error
            }
        default:
            return state
    }
}
