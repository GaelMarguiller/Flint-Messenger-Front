import React, {Component} from 'react';

import {Box, Button, Container, Grid} from '@material-ui/core';
import IdentitySection from '../../Login/components/IdentitySection';
import CredentialSection from '../../Login/components/CredentialSection';

import {IFormField, IPasswordField, RegisterFormKey} from '../../Login/types';
import {
    defaultPasswordFormField,
    defaultStringFormField, 
    validateConfirmationField,
    validateEmailField,
    validateNameField, 
    validatePasswordField
} from '../../Login/utils/validateForm';
import {getConnectedUser} from '../../Api/users';

interface IProfileScreenState {
    status: 'error' | 'success' | 'unavailable'
    email: IFormField<string>;
    firstname: IFormField<string>;
    lastname: IFormField<string>;
    password: IPasswordField;
    confirmation: IFormField<string>;
}

export default class ProfileScreen extends Component<{}, IProfileScreenState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            status: 'unavailable',
            firstname: defaultStringFormField(),
            lastname: defaultStringFormField(),
            email: defaultStringFormField(),
            password: defaultPasswordFormField(),
            confirmation: defaultStringFormField()
        }
    }

    componentDidMount(){
        getConnectedUser()
            .then(user => {
                this.setState({
                    status: 'success',
                    email:{
                        ...this.state.email,
                        value: user.email
                    },
                    firstname: {
                        ...this.state.firstname,
                        value: user.firstname
                    },
                    lastname: {
                        ...this.state.lastname,
                        value: user.lastname
                    }
                })
            })
            .catch(err => {
                this.setState({
                    status: 'error'
                })
            })
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

        const { email, firstname, lastname, password, confirmation } = this.state
        if(email.isValid && firstname.isValid && lastname.isValid && password.isValid && confirmation.isValid){
            //register(...this.state).then((user) => alert(user.firstname));
        }
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
                            required={false}
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
