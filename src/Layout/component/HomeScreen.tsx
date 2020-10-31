import React from 'react';
import LoginScreen from "../../Login/components/LoginScreen";
import {Box} from "@material-ui/core";
import ConversationsList from "../../Chat/components/ConversationsList";

class HomeScreen extends React.Component {
  render(){
    return (
        <Box>
          <LoginScreen/>
          <ConversationsList/>
        </Box>
    )
  }
}

export default HomeScreen;
