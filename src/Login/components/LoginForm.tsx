import React, {Component, Dispatch} from 'react';
import {Box, Button, Container, Grid, TextField} from '@material-ui/core';
import {login} from '../../Api/login';
import {connect} from 'react-redux';

interface LoginFormState {
    email: string;
    password: string;
}

export interface ILoginProps {
    loginProps: (email: string, password: string) => void;
}

class LoginForm extends Component<ILoginProps, LoginFormState> {
    constructor(props: ILoginProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (field: 'email' | 'password', newValue: string) => {
        this.setState({
            ...this.state,
            [field]: newValue
        })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.loginProps(this.state.email, this.state.password);
    }

    render(){
        return (
            <Container maxWidth="xs">
                <form onSubmit={this.handleSubmit} >
                    <Box style={{margin: "2rem 0"}}>
                        <TextField
                            required
                            label="Email"
                            variant="outlined"
                            fullWidth={true}
                            style={{paddingBottom: "1rem 0"}}
                            value={this.state.email}
                            onChange={(e) => this.handleChange("email", e.target.value)}
                        />
                        <TextField
                            required
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth={true}
                            value={this.state.password}
                            onChange={(e) => this.handleChange("password", e.target.value)}
                        />
                    </Box>
                    <Box style={{margin: "2rem 0"}}>
                        <Grid container justify="flex-end">
                            <Grid item xs={4}>
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loginProps: (email: string, password: string) => { dispatch(login(email, password)) }
})

export default connect(null, mapDispatchToProps)(LoginForm);
