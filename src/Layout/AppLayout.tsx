import React, {Component, Fragment} from 'react';
import {createStyles, IconButton, Theme, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


import AppContent from './AppContent';
import AppDrawer, {drawerWidth} from './AppDrawer';
import AppMenu from './AppMenu';

interface AppLayoutState {
    open: boolean;
    drawerOpened: boolean;
}

interface AppLayoutProps {
    classes: any;
}

const style = (theme: Theme) => createStyles({
    content: {
        width: `100%`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        display: 'flex',
    },
    contentShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

class AppLayout extends Component<AppLayoutProps, AppLayoutState> {
    constructor(props: AppLayoutProps) {
        super(props);
        this.state = {
            drawerOpened: false,
            open: false
        }
    }

    openDrawer = () => {
        this.setState({
            open: true
        })
    }

    render() {
        const contentClasses = [
            this.props.classes.content,
            this.state.drawerOpened && this.props.classes.contentShift
        ].join(" ");
        return (
            <Fragment>
                <div className={contentClasses}>
                    <AppMenu/>
                    <AppContent/>
                </div>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.openDrawer}
                    edge="start"
                >
                    <MenuIcon/>
                </IconButton>
                <AppDrawer
                    open={this.openDrawer}
                />
            </Fragment>
        )
    }
}

export default withStyles(style)(AppLayout);
