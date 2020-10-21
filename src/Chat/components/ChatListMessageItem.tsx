import React from "react";
import {IConversationMessage} from "../chatTypes";

export default function ChatListMessageItem({message} : {message:IConversationMessage}) {
    return (
        <h5>Message: {message.content}</h5>
    )
}
