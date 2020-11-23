import React from 'react';
import {connect} from "react-redux";
import {IAppState} from "../../appReducer";
import { IConversationMessage } from '../chatTypes';
import {Box, createStyles, makeStyles} from "@material-ui/core";
import {IUser} from "../../Users/usersTypes";
import UserDetails from "../../Users/components/UserDetails";

interface ChatMessagesProps {
    message : IConversationMessage;
    emitter: string;
    connectedUser?: IUser;
}

const useStyles = makeStyles(() =>
    createStyles({
        messageEmitter: {
            display: 'flex',
            flexDirection: 'row-reverse',
        },
        blockMessage: {
            display: 'flex',
            marginBottom: '2px',
            marginRight: '1rem'
        },
        message: {
            display: 'flex',
        },
        blockText: {
            borderRadius : '1.3rem',
            padding: '6px 12px 7px',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgb(0, 153, 255)',
            color: '#fff',
            maxWidth: '60%',
            display: 'flex',
            fontSize: '15px',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        text: {
            margin: 'auto 0',
        }
    })
)

function ChatMessage({message, emitter, connectedUser}: ChatMessagesProps){
    const classes = useStyles();
    return (
        <li className={emitter === connectedUser?._id ? classes.messageEmitter : classes.message}>
            <Box className={classes.blockMessage}>
                <UserDetails key={emitter} id={emitter} displayText={false} smallStyle={true}/>
                <Box className={classes.blockText}>
                    <p className={classes.text}>{message.content}</p>
                </Box>
            </Box>
        </li>
    )
}

const mapStateToProps = ({users} : IAppState) => ({
    connectedUser: users.connectedUser,
    users: users.list,
});

export default connect(mapStateToProps)(ChatMessage);
