
import {Container, List} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../appReducer';
import { IConversation } from '../chatTypes';
import ConversationsListItem from './ConversationsListItem';
import UsersList from "../../Users/components/UsersList";
import {makeStyles} from "@material-ui/core/styles";

interface ConversationsListProps {
    conversations: IConversation[];
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'start',
    },
});

function ConversationsList ({ conversations } : ConversationsListProps ) {
    const classes = useStyles();

    if(conversations.length === 0){
        return <h1>Loading</h1>
    } else {
        return (
            <Container className={classes.root}>
                <UsersList/>
                <List>
                    {conversations.map((conversation, index) => <ConversationsListItem key={index} conversation={conversation} />)}
                </List>
            </Container>
        )
    }
}

const mapStateToProps = ({ conversations }: IAppState) => ({
    conversations: conversations.list,
})

export default connect(mapStateToProps)(ConversationsList);
