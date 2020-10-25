import React, {Component} from 'react';
import {Box, Button, Container, Grid} from '@material-ui/core';
import ChatListMessage from './ChatListMessage';
import ChatInput from './ChatInput';
import { RegisterFormKey} from '../../Login/loginTypes';
import {getConversations} from "../../Api/messages";
import {IConversation} from "../chatTypes";
import {Loading} from "../../Layout/Loading";

interface ChatFormState{
    conversations?: IConversation;
}

export default class ChatForm extends Component<{}, ChatFormState> {
    constructor(props: {}){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        getConversations().then(conversations => {
            this.setState({
                conversations: conversations[0]
            })
        })
    }

    handleChange = (field: RegisterFormKey, newValue: string) => {
        /*const newState = {
            ...this.state,
            [field]: {
                ...this.state[field],
                value: newValue,
            }
        };
        this.setState(newState);*/
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        /*event.preventDefault();

        const { message } = this.state
        if(message){
            registerUser().then((user) => alert(firstname.value));
        }*/
    }

    render() {
        const { conversations } = this.state;
        if(!conversations) {
            return <Loading />
        } else {
            return (
                <Container maxWidth='sm'>
                    <Box style={{margin: '2rem 0'}}>
                        <ChatListMessage messages={conversations.messages} />
                    </Box>
                    <form onSubmit={this.handleSubmit}>
                        <Box style={{margin: '2rem 0'}}>
                            <ChatInput

                            />
                        </Box>
                        <Box style={{margin: '2rem 0'}}>
                            <Grid container justify='flex-end'>
                                <Grid item xs={4}>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        variant='contained'
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                </Container>
            )
        }
    }
}
