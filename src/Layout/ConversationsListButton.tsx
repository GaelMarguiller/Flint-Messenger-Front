import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import React from 'react';
import { DrawerContentString } from './types';

export function ConversationsListButton({ toggleDrawer }: {toggleDrawer: (content: DrawerContentString) => void}) {
    return (
        <IconButton aria-label="conversations" onClick={e => toggleDrawer('conversations')}>
            <ForumIcon fontSize="large" />
        </IconButton>
    );
}
