import React from 'react';
import {makeStyles, Theme, createStyles, Box, Drawer, IconButton} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface DrawerProps {
    open: boolean;
    closeDrawer: () => void;
}

export const drawerWidth = 500;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerHeader: {
            heigth: '50px',
            textAlign: 'right',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: theme.palette.background.paper,
            borderBottom: `1px solid ${theme.palette.divider}`,
        },
        paper: {
            width: drawerWidth,
        },
        drawerContent: {
            height: 'calc(100% - 50px)',
        }
    })
)



export default function AppDrawer(){
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const closeDrawer = () => {
        setOpen(false);
    };
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.paper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={closeDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Box>
                <h1>Coucou Toto</h1>
            </Box>
        </Drawer>
    )
}
