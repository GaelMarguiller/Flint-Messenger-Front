import React, {Component} from 'react';
import {ListItem, ListItemText} from '@material-ui/core';

import {IConversation} from '../chatTypes';
import {Link} from "react-router-dom";

interface ConversationsListItemProps {
    conversation: IConversation;
}

export default class ConversationsListItem extends Component<ConversationsListItemProps> {
    render() {
        const conversations = this.props.conversation;
        return (
            <ListItem
                divider
                button
                component={Link}
                to={`/chat/${conversations._id}`}
                key={conversations._id}>
                <ListItemText
                    primary={conversations._id}
                    secondary={conversations.messages[0].content}
                />
            </ListItem>
        )
    }
}
