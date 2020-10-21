import React from 'react';
import { makeStyles, Theme, createStyles, Drawer, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import ConversationsList from '../Chat/components/ConversationsList';
import UsersList from '../Users/components/UsersList';
import { Alert } from './Alert';
import { DrawerContentString } from './types';


interface DrawerProps {
    open: boolean,
    closeDrawer: () => void;
    content?: DrawerContentString;
}

export const drawerWidth = 500;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerHeader: {
            heigth: '50px',
            textAlign: 'right',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        paper: {
            width: drawerWidth,
        },
        drawerContent: {
            height: 'calc(100% - 50px)',
        }
    })
)

const renderingDrawer = (drawerContent: string) => {
    if(drawerContent === 'users') {
        return <UsersList />
    } else if (drawerContent === 'conversations') {
        return <ConversationsList/>
    } else { return <Alert  status='error' error='Drawer content invalid'/> }
}

function AppDrawer({ open, closeDrawer, content }: DrawerProps){
    const classes = useStyles();

    return (
        <Drawer
            variant='persistent'
            anchor='left'
            open={open}
            onClose={closeDrawer}
            classes={{
                paper: classes.paper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeft />
                </IconButton>
            </div>
            <Divider />
            { content && renderingDrawer(content)}
        </Drawer>
    )
}

export default AppDrawer;
