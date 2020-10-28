import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppState } from '../../appReducer';
import { Loading } from '../../Layout/component/Loading';
import { IConversation } from '../chatTypes';
import { AttendeesList } from './AttendeesList';
import ChatInput from './ChatInput';
import ChatMessages from './ChatListMessage';

interface ChatScreenProps {
    match: any;
    history: any;
    location: any;
    conversation?: IConversation;
}

class ChatScreen extends React.Component<ChatScreenProps> {
    render(){
        const { conversation } = this.props;
        if(!conversation) return <Loading />

        return (
            <Fragment>
                <h1>Chat</h1>
                <ChatMessages messages={conversation.messages} conversationId={conversation._id} />
                <ChatInput conversation={conversation} />
                <AttendeesList users={conversation.targets}/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({conversations}: IAppState, props: ChatScreenProps) => {
    const conversationID = props.match.params.conversationID;

    return {
        conversation: conversations.list.find(conv => conv._id === conversationID)
    }
}
export default connect(mapStateToProps)(withRouter(ChatScreen));
