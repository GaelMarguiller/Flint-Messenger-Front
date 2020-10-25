export interface ILoginState {
    userId: string;
    isAuthenticated: boolean
    isFetching: boolean;
    error: string;
}

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface ILoginAction {
    type: typeof LOGIN,
    isFetching: boolean
}

export interface ILoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    isFetching: boolean,
    payload : {
        userId: string;
        isAuthenticated: boolean
    }
}

export interface ILoginErrorAction {
    type: typeof LOGIN_ERROR,
    isFetching: boolean,
    error : string
}

export interface IFormField<T> {
    value: T;
    isValid: boolean;
    error?: string;
}

export interface IPasswordField extends IFormField<string> {
    hasLower: boolean;
    hasUpper: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
    hasValidLength: boolean;
}

export type RegisterFormKey = 'email' | 'password' | 'firstname' | 'lastname' | 'confirmation';

export type LoginAction = ILoginAction | ILoginSuccessAction | ILoginErrorAction
