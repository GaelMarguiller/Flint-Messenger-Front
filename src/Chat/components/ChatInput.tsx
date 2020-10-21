import React, {Component, Fragment} from 'react';
import {TextField} from '@material-ui/core';
import { RegisterFormKey} from '../../Login/types';

/*interface ChatInputProps {
    message: string;
    handleChange: (field: RegisterFormKey, value: string) => void;
}*/

export default class ChatInput extends Component<{}/*ChatInputProps*/, any> {
    render() {
        //const { message } = this.props;
        return (
            <Fragment>
                <TextField
                    variant='outlined'
                    fullWidth={true}
                    /*value={message}
                    onChange={(e) => this.props.handleChange('email', e.target.value)}*/
                />
            </Fragment>
        );
    }
}
