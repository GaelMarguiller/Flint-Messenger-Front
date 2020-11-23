import React, {useEffect} from 'react';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';
import {IAppState} from '../../appReducer';
import {makeUpdateConversationSeen} from '../actions/makeUpdateConversationSeen';
import {IConversationMessage} from '../chatTypes';
import ChatMessage from './ChatListMessageItem';
import {Box, createStyles, makeStyles} from "@material-ui/core";

interface ChatMessagesProps {
    messages: IConversationMessage[];
    conversationId: string;
    makeUpdateConversationSeen: (convId: string) => void;
}

const useStyles = makeStyles(() =>
    createStyles({
        chat: {
            display: 'flex',
            flexDirection: 'column',
            height: '60vh',
            overflowY: 'scroll',
            '&::-webkit-scrollbar': {
                width: '0.8em',
                borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '10px',
                backgroundColor: 'rgb(0, 153, 255)',
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
            }
        },
    })
)

function ChatMessages({messages, conversationId, makeUpdateConversationSeen}: ChatMessagesProps) {
    const classes = useStyles();
    useEffect(
        () => {
            makeUpdateConversationSeen(conversationId)
        },
        [messages.length]
    )

    return (
        <Box>
            <ul className={classes.chat}>
                {messages.map((message, index) =>
                    <ChatMessage
                        key={index}
                        message={message}
                        emitter={message.emitter}
                    />)}
            </ul>
        </Box>
    )
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, Action>) => ({
    makeUpdateConversationSeen: (conversationId: string) => dispatch(makeUpdateConversationSeen(conversationId))
});

export default connect(undefined, mapDispatchToProps)(ChatMessages);
