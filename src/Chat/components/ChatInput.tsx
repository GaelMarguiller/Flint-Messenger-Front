import {createStyles, Grid, makeStyles, TextField} from '@material-ui/core';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../../Api/messages';
import {updateConversation} from '../actions/updateConversation';
import {IConversation} from '../chatTypes';

interface ChatInputProps {
    conversation: IConversation;
    updateConversation: (conversation: IConversation) => void;
}

const useStyles = makeStyles(() =>
    createStyles({
        inputChatText: {
            display: 'flex',
            width: '100%'
        },
    })
)

function ChatInput ({conversation, updateConversation}: ChatInputProps) {
    const [messageInput, setMessageInput] = useState('')
    const classes = useStyles();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const sentMessage = await sendMessage(
            messageInput,
            conversation._id,
            conversation.targets
        )
        setMessageInput('')
        const newConversation = {
            ...conversation,
            messages: [...conversation.messages, sentMessage]
        };
        updateConversation(newConversation);
    }

    const handleChange = (newMessage: string) => {
        setMessageInput(newMessage)
    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container spacing={1} alignItems='center' justify='space-between'>
                <Grid item xs={12}>
                    <TextField
                        fullWidth={true}
                        variant='outlined'
                        placeholder='Type your message here'
                        value={messageInput}
                        onChange={(e) => handleChange(e.target.value)}
                        className={classes.inputChatText}
                    />
                </Grid>
            </Grid>
        </form>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    updateConversation: (conversation: IConversation) => {
        dispatch(updateConversation(conversation))
    }
})
export default connect(undefined, mapDispatchToProps)(ChatInput);
