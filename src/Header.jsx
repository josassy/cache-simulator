import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        position: "sticky",
        top: 0,
        backgroundColor: theme.palette.background.default,
        zIndex: 10,
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Typography variant="h1">React Cache Simulator</Typography>
            <Typography variant="caption">(c) 2020 Josiah R Lansford</Typography>
        </header>
    )
}

export default Header;