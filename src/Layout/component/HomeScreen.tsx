import React from 'react';
import LoginScreen from "../../Login/components/LoginScreen";
import {Box} from "@material-ui/core";

class HomeScreen extends React.Component {
  render(){
    return (
        <Box>
          <LoginScreen/>
        </Box>
    )
  }
}

export default HomeScreen;
