import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeVerifyUnseenMessages } from '../actions/makeVerifyUnseenMessages';
import { IConversation } from '../chatTypes';
import {IUser} from "../../Users/usersTypes";
import {IAppState} from "../../appReducer";

function ConversationsListItem({conversation, verifyUnseenMessage, users} : {conversation: IConversation, users: IUser[], verifyUnseenMessage: () => void}){
    const userId = users.map(user => user._id)
    const targetId = conversation.targets.map(target => target)
    const intersection = userId.filter(key => targetId.includes(key))

    let targetName: string[] = []
    for(const key in intersection) {
        users.map(user => {
            if(user._id === intersection[key]) {
                targetName.push(user.firstname)
            }
        })
    }

    return (
        <ListItem
            divider
            button
            component={Link}
            to={`/conversation/${conversation._id}`}
            onClick={verifyUnseenMessage}
            key={conversation._id}
            alignItems="flex-start">
            <ListItemText
                primary={ targetName.map(name => `${name} `) }
                secondary={conversation.messages[0]?.content || 'No message...'}
            />
        </ListItem>
    )
}

const mapStateToProps = ({users} : IAppState) => ({
    users: users.list,
});

const mapDispatchToProps = (dispatch: any) => ({
    verifyUnseenMessage: () => { dispatch(makeVerifyUnseenMessages()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsListItem);
