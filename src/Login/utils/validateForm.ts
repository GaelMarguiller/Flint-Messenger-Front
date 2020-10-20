import { IFormField, IPasswordField } from '../types';

export function defaultStringFormField(): IFormField<string>{
    return {
        value: '',
        isValid: true,
    }
}

export function defaultPasswordFormField(): IPasswordField {
    return {
        ...defaultStringFormField(),
        hasLower: false,
        hasUpper: false,
        hasNumber: false,
        hasSymbol: false,
        hasValidLength: false,
    }
}

export function validateEmailField(field: IFormField<string>): void {
    field.isValid = /^[a-z0-9-.]+@[a-z0-9-.]+\.[a-z]+$/gi.test(field.value);
    if (!field.isValid) field.error = 'Expecting a valid email address';
    else delete field.error;
}

export function validateNameField(field: IFormField<string>): void {
    field.isValid = /^[a-zA-Z]{1,20}$/.test(field.value);
    if (!field.isValid) field.error = 'Expecting 1..20 characters in a..z';
    else delete field.error;
}

export function validatePasswordField(password: IPasswordField, isOptional?: boolean): void {
    password.hasLower = /[a-z]+/.test(password.value);
    password.hasUpper = /[A-Z]+/.test(password.value);
    password.hasNumber = /\d+/.test(password.value);
    password.hasSymbol = /[^a-zA-Z0-9]+/.test(password.value);
    password.hasValidLength = /^.{8,20}$/.test(password.value);
    // Optional is used for the profile page since you can change your profile without changing your password
    password.isValid =
        (isOptional && !password.value) ||
        [password.hasLower, password.hasUpper, password.hasNumber, password.hasSymbol, password.hasValidLength].every(
            Boolean,
        );
    if (!password.isValid) password.error = 'Must meet the minimum requirements';
    else delete password.error;
}

export function validateConfirmationField(confirmation: IFormField<string>, password: IPasswordField): void {
    confirmation.isValid = password.value === confirmation.value;
    if (!confirmation.isValid) confirmation.error = 'Password confirmation does not match';
    else delete confirmation.error;
}
