import React, { Component } from 'react';
import {connect} from 'react-redux';

import CredentialSection from './CredentialSection';
import IdentitySection from './IdentitySection';
import { Container, Box, Button, Grid } from '@material-ui/core';

import { IFormField, IPasswordField, RegisterFormKey } from '../loginTypes';

import {
    defaultPasswordFormField,
    defaultStringFormField,
    validateConfirmationField,
    validateEmailField,
    validateNameField,
    validatePasswordField
} from '../utils/validateForm';

import {registerUser} from '../../Api/login';


interface RegisterFormState{
    email: IFormField<string>;
    firstname: IFormField<string>;
    lastname: IFormField<string>;
    password: IPasswordField;
    confirmation: IFormField<string>;
}

export interface IRegisterProps {
    registerProps: (
        firstname: IFormField<string>,
        lastname: IFormField<string>,
        email: IFormField<string>,
        password: IPasswordField,
    ) => void;
}

class RegisterForm extends Component<IRegisterProps, RegisterFormState> {
    constructor(props: IRegisterProps){
        super(props);
        this.state = {
            email: defaultStringFormField(),
            firstname: defaultStringFormField(),
            lastname: defaultStringFormField(),
            password: defaultPasswordFormField(),
            confirmation: defaultStringFormField()
        }
    }

    handleChange = (field: RegisterFormKey, newValue: string) => {
        const newState = {
            ...this.state,
            [field]: {
                ...this.state[field],
                value: newValue,
            }
        };
        if (field === 'email') {
            const { email } = newState;
            validateEmailField(email);
        } else if (['firstname', 'lastname'].includes(field)) {
            const formField = newState[field];
            validateNameField(formField);
        } else if (field === 'password') {
            const { password } = newState;
            validatePasswordField(password);
        }
        if (['password', 'confirmation'].includes(field)) {
            const { password, confirmation } = newState;
            validateConfirmationField(confirmation, password);
        }
        this.setState(newState);
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.registerProps(
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.password
        )
    }


    render(){
        const { email, firstname, lastname, password, confirmation } = this.state;
        return (
            <Container maxWidth='sm'>
                <form onSubmit={this.handleSubmit}>
                    <Box style={{margin: '2rem 0'}}>
                        <IdentitySection
                            email={email}
                            firstname={firstname}
                            lastname={lastname}
                            handleChange={this.handleChange}
                        />
                    </Box>
                    <Box style={{margin: '2rem 0'}}>
                        <CredentialSection
                            password={password}
                            confirmation={confirmation}
                            handleChange={this.handleChange}
                            required
                        />
                    </Box>
                    <Box style={{margin: '2rem 0'}}>
                        <Grid container justify='flex-end'>
                            <Grid item xs={4}>
                                <Button
                                    type='submit'
                                    color='primary'
                                    variant='contained'
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    registerProps: ( firstname: IFormField<string>,
                     lastname: IFormField<string>,
                     email: IFormField<string>,
                     password: IPasswordField
    ) => { dispatch(registerUser(firstname.value, lastname.value, email.value, password.value)) },
})

export default connect(null, mapDispatchToProps)(RegisterForm);
