import React, { Component } from 'react';

import { IConversation } from '../chatTypes';

import {getConversations} from "../../Api/messages";
import ConversationsListItem from "./ConversationsListItem";
import {List} from "@material-ui/core";

interface ConversationsListState {
    conversations: IConversation[];
}
export default class ConversationsList extends Component<{}, ConversationsListState>{
    constructor(props: {}){
        super(props);
        this.state = {
            conversations: []
        }
    }

    componentDidMount(){
        getConversations().then(conversations => {
            this.setState({
                conversations: conversations
            })
        })
    }
    render(){
        if(this.state.conversations.length === 0){
            return <h1>Loading</h1>
        } else {
           return <List>
               { this.state.conversations.map((conversations, index) =>
                   <ConversationsListItem key={index} conversation={conversations} />
                   )
               }
            </List>
        }
    }
}
