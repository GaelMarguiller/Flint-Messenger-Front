import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ChatScreen from '../../Chat/components/ChatScreen';
import LoginScreen from '../../Login/components/LoginScreen';
import ProfileScreen from '../../Users/components/ProfileScreen';
import UsersList from '../../Users/components/UsersList';
import {ErrorScreen} from './ErrorScreen';
import HomeScreen from './HomeScreen';
import {connect} from "react-redux";
import {IAppState} from "../../appReducer";
import {IUser} from "../../Users/usersTypes";
import ConversationsList from "../../Chat/components/ConversationsList";

function AppContent({connectedUser}: { connectedUser?: IUser }) {
    return (
        <Switch>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/users' component={UsersList}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/conversations' component={ConversationsList}/>
            <Route path='/conversation/:conversationID' component={ChatScreen}/>
            <Route exact path='/'>
                {connectedUser ? <Redirect to="/conversations" /> : <HomeScreen />}
            </Route>
            <Route><ErrorScreen errorMessage='Oops ! It seems like we did not find this page!'/></Route>
        </Switch>
    )
}

const mapStateToProps = ({users}: IAppState) => ({
    connectedUser: users.connectedUser
})
export default connect(mapStateToProps)(AppContent)
