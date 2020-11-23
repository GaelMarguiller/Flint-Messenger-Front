import React  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppState } from '../../appReducer';
import { Loading } from '../../Layout/component/Loading';
import { IConversation } from '../chatTypes';
import { AttendeesList } from './AttendeesList';
import ChatInput from './ChatInput';
import ChatMessages from './ChatListMessage';
import {Box, createStyles, makeStyles} from "@material-ui/core";

interface ChatScreenProps {
    match: any;
    history: any;
    location: any;
    conversation?: IConversation;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            margin: '0 auto',
            flexDirection: 'column',
            width: '70vw',
            height: '90vh',
            overflow: 'hidden'
        }
    })
)

function ChatScreen({conversation} : ChatScreenProps){
    const classes = useStyles();
    if(!conversation) return <Loading />
    return (
        <Box className={classes.root}>
            <h1>Chat</h1>
            <ChatMessages messages={conversation.messages} conversationId={conversation._id}/>
            <ChatInput conversation={conversation} />
            <AttendeesList users={conversation.targets}/>
        </Box>
    )
}

const mapStateToProps = ({conversations}: IAppState, props: ChatScreenProps) => {
    const conversationID = props.match.params.conversationID;

    return {
        conversation: conversations.list.find(conv => conv._id === conversationID)
    }
}
export default connect(mapStateToProps)(withRouter(ChatScreen));
