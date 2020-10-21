import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LoginScreen from '../Login/components/LoginScreen';
import UsersList from '../Users/components/UsersList';
import ProfileScreen from '../Users/components/ProfileScreen';
import {ErrorScreen} from "./ErrorScreen";
import ChatScreen from "../Chat/components/ChatScreen";
import ConversationsList from "../Chat/components/ConversationsList";

export default class AppContent extends Component {
    render() {
        return (
            <Switch>
                <Route path='/login' component={LoginScreen}/>
                <Route path='/users' component={UsersList}/>
                <Route path='/profile' component={ProfileScreen}/>
                <Route path="/conversation" component={ConversationsList} />
                <Route path="/chat/:id" component={ChatScreen} />
                <Route exact path="/"/>
                <Route><ErrorScreen errorMessage='Oops ! It seems like we did not find this page!'/></Route>
            </Switch>
        )
    }
}

