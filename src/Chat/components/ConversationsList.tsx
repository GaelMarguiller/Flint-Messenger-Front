import React, { Component } from 'react';
import {connect} from 'react-redux';
import {List} from '@material-ui/core';

import { IConversation } from '../chatTypes';
import {getConversations} from '../../Api/messages';
import ConversationsListItem from './ConversationsListItem';

import {IAppState} from '../../appReducer';

export interface IConversationsListProps {
    list: IConversation[]
    getConversationsListProps: () => void;
}

class ConversationsList extends Component<IConversationsListProps>{
    componentDidMount(){
        this.props.getConversationsListProps()
    }
    render(){
        if(this.props.list.length === 0){
            return <h1>Loading</h1>
        } else {
           return <List>
               { this.props.list.map((conversation, index) =>
                   <ConversationsListItem key={index} conversation={conversation} />
                   )
               }
            </List>
        }
    }
}

const mapStateToProps = (state: IAppState) => ({
    list: state.conversations.list
})


const mapDispatchToProps = (dispatch: any) => ({
    getConversationsListProps: () => { dispatch(getConversations()) }
})

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList)
