import React from "react";
import ChatListMessageItem from "./ChatListMessageItem";
import {IConversationMessage} from "../chatTypes";

export default function ChatListMessage({messages} :{messages : IConversationMessage[]}){
    return (
        <ul>
            {messages.map((message, index) => <ChatListMessageItem key={index} message={message} />)}
        </ul>
    )
}
