import {ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles, createStyles, Theme} from '@material-ui/core';
import { connect } from 'react-redux';
import React from 'react';
import { IAppState } from '../../appReducer';
import { IUser } from '../usersTypes';
import { StyledBadge } from '../../Layout/component/StyledBadges';

interface UserDetailsProps {
    user: IUser
    displayText: boolean
    smallStyle: boolean
}

interface UserDetailsPropsGiven {
    id: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        blockAvatar: {
            width: 'inherit',
            padding: 0
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
            fontSize: '0.8rem',
        },
    })
)

function UserDetails({user, displayText, smallStyle} : UserDetailsProps){
    const classes = useStyles();

    let avatar;
    if(user.status === "online") {
        avatar = <StyledBadge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            variant="dot"
        >
            <Avatar className={smallStyle ? classes.small : undefined}>
                {user.firstname[0]}{user.lastname[0]}
            </Avatar>
        </StyledBadge>
    } else {
        avatar = <Avatar className={smallStyle ? classes.small : undefined}> {user.firstname[0]}{user.lastname[0]} </Avatar>
    }
    return (
        <ListItem className={classes.blockAvatar}>
            <ListItemAvatar>
                {avatar}
            </ListItemAvatar>

            {
                displayText &&
                <ListItemText
                    primary={`${user.firstname} ${user.lastname}`}
                />
            }
        </ListItem>
    )
}

const mapStateToProps = (store: IAppState, props: UserDetailsPropsGiven) => {
    return {
        user: store.users.list.find(user => user._id === props.id) || { _id: "", firstname: 'Unknown', lastname: 'User', email: "usernotfound", conversationsSeen: {}, status:'offline'}
    }
}

export default connect(mapStateToProps)(UserDetails);
