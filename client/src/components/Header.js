import React from 'react';
import {AppBar, Toolbar, Typography, CssBaseline} from '@material-ui/core';

export default function Header () {
    return (
        <>
        <CssBaseline />
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

