import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Forum } from '@material-ui/icons';
import React from 'react';
import { ContactListButton } from './ContactListButton';
import { ProfileButton } from './ProfileButton';
import { DrawerContentString } from './types';

function AppMenu({ toggleDrawer }: {toggleDrawer: (content: DrawerContentString) => void}){
    return (
        <AppBar position="static" style={{ height: '10vh' }}>
            <Grid container justify="space-between" alignItems="center" style={{ height: '100%' }}>
                <Grid item>
                    <Toolbar>
                        <Forum fontSize="large" />
                        <Typography variant="h3"> Enigma.</Typography>
                    </Toolbar>
                </Grid>
                <Grid item>
                    <Toolbar>
                        <ContactListButton toggleDrawer={toggleDrawer}/>
                        <ProfileButton />
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default AppMenu
