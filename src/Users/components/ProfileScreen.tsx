import React, {Component} from 'react';

import {Box, Button, Container, Grid} from '@material-ui/core';
import IdentitySection from '../../Login/components/IdentitySection';
import CredentialSection from '../../Login/components/CredentialSection';

import {IFormField, IPasswordField, RegisterFormKey} from '../../Login/loginTypes';
import {
    defaultPasswordFormField,
    defaultStringFormField,
    validateConfirmationField,
    validateEmailField,
    validateNameField,
    validatePasswordField
} from '../../Login/utils/validateForm';
import {getUpdateUser, getUser} from '../../Api/users';
import {getConversations} from '../../Api/messages';
import {IAppState} from '../../appReducer';
import {connect} from 'react-redux';
import {IUser} from '../usersTypes';
import {getUserError} from '../actions/usersActions';

interface IProfileScreenState {
    email: IFormField<string>;
    firstname: IFormField<string>;
    lastname: IFormField<string>;
    password: IPasswordField;
    confirmation: IFormField<string>;
}

export interface IProfileScreenProps {
    userId: string;
    getUpdateUserProps: (
        id: string,
        firstname: IFormField<string>,
        lastname: IFormField<string>,
        email: IFormField<string>,
        password: IPasswordField,
    ) => void;
    getUserProps: (userId: string) => Promise<IUser>;
}

class ProfileScreen extends Component<IProfileScreenProps, IProfileScreenState> {
    constructor(props: IProfileScreenProps) {
        super(props);

        this.state = {
            firstname: defaultStringFormField(),
            lastname: defaultStringFormField(),
            email: defaultStringFormField(),
            password: defaultPasswordFormField(),
            confirmation: defaultStringFormField()
        }
    }

    componentDidMount(){
       this.props.getUserProps(this.props.userId)
            .then(user => {
                this.setState({
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
                getUserError(err)
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
            const {email} = newState;
            validateEmailField(email);
        } else if (['firstname', 'lastname'].includes(field)) {
            const formField = newState[field];
            validateNameField(formField);
        } else if (field === 'password') {
            const {password} = newState;
            validatePasswordField(password);
        }
        if (['password', 'confirmation'].includes(field)) {
            const {password, confirmation} = newState;
            validateConfirmationField(confirmation, password);
        }
        this.setState(newState);
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.getUpdateUserProps(
            this.props.userId,
            this.state.firstname,
            this.state.lastname,
            this.state.email,
            this.state.password
        )
    }

    render() {
        getConversations().then(conversation => console.log(conversation))
        const {email, firstname, lastname, password, confirmation} = this.state;
        return <Container maxWidth='sm'>
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
                                Update Profile
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Container>
    }
}

const mapStateToProps = (state: IAppState) => ({
    userId: state.login.userId,
})

const mapDispatchToProps = (dispatch: any) => ({
    getUserProps: (userId:string) => {dispatch(getUser(userId))},
    getUpdateUserProps: (id: string,
                         firstname: IFormField<string>,
                         lastname: IFormField<string>,
                         email: IFormField<string>,
                         password: IPasswordField
    ) => { dispatch(getUpdateUser(id, firstname.value, lastname.value, email.value, password.value))}
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
