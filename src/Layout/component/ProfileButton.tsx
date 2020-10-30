import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IAppState } from '../../appReducer';
import { IUser } from '../../Users/usersTypes';

function ProfileButton({connectedUser}: {connectedUser?: IUser}) {
    const redirection = connectedUser ? '/profile' : '/login';
    return (
        <Link to={redirection}>
            <IconButton aria-label="profile">
                <AccountCircle fontSize="large" />
            </IconButton>
        </Link>
    )
}

const mapStateToProps = ({users}: IAppState) => ({
    connectedUser: users.connectedUser
})
export default connect(mapStateToProps)(ProfileButton)
