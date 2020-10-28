import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../Api/messages';
import { updateConversation } from '../actions/updateConversation';
import { IConversation } from '../chatTypes';

interface ChatInputProps {
    conversation: IConversation;
    updateConversation: (conversation: IConversation) => void;
}

interface ChatInputState {
    messageInput: string
}

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
    constructor(props: ChatInputProps){
        super(props);
        this.state = { messageInput: '' }
    }

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const sentMessage = await sendMessage(
            this.state.messageInput,
            this.props.conversation._id,
            this.props.conversation.targets
        )
        this.setState({
            messageInput: ''
        })

        const newConversation = {
            ...this.props.conversation,
            messages: [...this.props.conversation.messages, sentMessage]
        };
        this.props.updateConversation(newConversation);
    }

    handleChange = (newMessage: string) => {
        this.setState({
            messageInput: newMessage
        })
    }

    render(){
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <Grid container spacing={1} alignItems='center' justify='space-between'>
                    <Grid item xs={9}>
                        <TextField
                            fullWidth={true}
                            variant='outlined'
                            placeholder='Type your message here'
                            value={this.state.messageInput}
                            onChange={(e) => this.handleChange(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button type='submit' variant='contained' color='primary'>Envoyer</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    updateConversation: (conversation: IConversation) => { dispatch(updateConversation(conversation))}
})
export default connect(undefined, mapDispatchToProps)(ChatInput);
