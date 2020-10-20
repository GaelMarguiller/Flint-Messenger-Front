
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import AppLayout from './Layout/AppLayout';
import history from './history';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: "#000"
        },
        error: red,
    },
})
export default function App() {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <AppLayout />
            </ThemeProvider>
        </Router>
    );
}
