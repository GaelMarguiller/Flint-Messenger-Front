import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginScreen from '../Login/components/LoginScreen';
import UsersList from '../Users/components/UsersList';
import ProfileScreen from '../Users/components/ProfileScreen';
import {ErrorScreen} from "./ErrorScreen";

export default class AppContent extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={LoginScreen}/>
                <Route path='/users' component={UsersList}/>
                <Route path='/profile' component={ProfileScreen}/>
                <Route><ErrorScreen errorMessage='Oops ! It seems like we did not find this page!'/></Route>
            </Switch>
        )
    }
}

