import React, { Component } from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";

export default class AppMenu extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <AccountCircleIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Flint Messenger
                    </Typography>
                    <Link className={'loginLink'} to={'/login'} color="inherit">Login</Link>
                </Toolbar>
            </AppBar>
        )
    }
}
