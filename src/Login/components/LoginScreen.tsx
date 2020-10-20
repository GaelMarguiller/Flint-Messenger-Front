import React, { Component, Fragment } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import TabPanel from './TabPanel';

interface LoginScreenState{
    selectedTab: number;
}

export default class LoginScreen extends Component<{}, LoginScreenState> {
    constructor(props: {}){
        super(props);

        this.state = {
            selectedTab: 0
        }
    }

    handleChange = (_: React.ChangeEvent<{}>, newTab: number) => {
        this.setState({selectedTab: newTab})
    }

    render(){
        const selectedTab = this.state.selectedTab;
        return (
            <Fragment>
                <AppBar position="static">
                    <Tabs value={selectedTab} onChange={this.handleChange} aria-label="simple tabs example">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                </AppBar>
                <TabPanel value={selectedTab} index={0}>
                    <LoginForm />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <RegisterForm />
                </TabPanel>
            </Fragment>)
    }
}
