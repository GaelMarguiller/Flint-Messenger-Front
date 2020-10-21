import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Forum } from '@material-ui/icons';

import { ContactListButton } from './ContactListButton';
import { ConversationsListButton } from './ConversationsListButton';
import { ProfileButton } from './ProfileButton';
import { DrawerContentString } from './types';


function AppMenu({ toggleDrawer }: {toggleDrawer: (content: DrawerContentString) => void}){
    return (
        <AppBar position='static' style={{ height: '10vh' }}>
            <Grid container justify='space-between' alignItems='center' style={{ height: '100%' }}>
                <Grid item>
                    <Link to={'/'} >
                        <Toolbar>
                            <Forum fontSize='large' />
                            <Typography variant='h3'> Enigma.</Typography>
                        </Toolbar>
                    </Link>
                </Grid>
                <Grid item>
                    <Toolbar>
                        <ConversationsListButton toggleDrawer={toggleDrawer}/>
                        <ContactListButton toggleDrawer={toggleDrawer}/>
                        <ProfileButton />
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default AppMenu
