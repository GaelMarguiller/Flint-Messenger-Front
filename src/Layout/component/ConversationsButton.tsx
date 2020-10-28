import { Badge } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Forum from '@material-ui/icons/Forum';
import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../appReducer';
import { DrawerContentString } from '../types';

interface ConversationsButtonProps {
  toggleDrawer: (content: DrawerContentString) => void;
  unseenMessage: number;
}

function ConversationsButton({ toggleDrawer, unseenMessage }: ConversationsButtonProps) {
  return (
    <Badge badgeContent={unseenMessage} color="secondary">
      <IconButton aria-label="contacts" onClick={e => toggleDrawer("conversations")}>
        <Forum fontSize="large" />
      </IconButton>
    </Badge>
  );
}

const mapStateToProps = ({conversations}: IAppState) => ({
  unseenMessage: conversations.totalUnseenMessages
})

export default connect(mapStateToProps)(ConversationsButton);