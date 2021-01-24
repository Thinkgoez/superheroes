import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <NavLink to='/'>
                        <Typography variant="h6" noWrap>SuperHeroes site</Typography>
                    </NavLink>
                    <NavLink to='/heroes' style={{paddingLeft: '3vw'}}>
                        <Typography variant="h6" noWrap>Heroes</Typography>
                    </NavLink>
                    <NavLink to='/create_hero' style={{paddingLeft: '3vw'}}>
                        <Typography variant="h6" noWrap>Add new Hero</Typography>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

