import React, {Component} from 'react';
import {ListItem} from '@material-ui/core';

import {IConversation} from '../chatTypes';
import {Link} from "react-router-dom";

interface ConversationsListItemProps {
    conversation: IConversation;
}

export default class ConversationsListItem extends Component<ConversationsListItemProps> {
    render() {
        const conversations = this.props.conversation;
        return (
            <ListItem>
                <Link to={`/chat/${conversations._id}`}>
                    {conversations._id}
                </Link>
            </ListItem>
        )
    }
}
