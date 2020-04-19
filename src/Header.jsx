import React from 'react';
import { Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        position: "sticky",
        top: 0,
        backgroundColor: theme.palette.background.default,
        zIndex: 10,
        padding: theme.spacing(1),
    },
    link: {
        color: theme.palette.text.primary,
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <Typography variant="h1">React Cache Simulator</Typography>
            <Typography variant="caption">(c) 2020 Josiah R Lansford, </Typography>
            <Link variant="caption" className={classes.link} href="https://josiahlansford.com">josiahlansford.com</Link>
        </header>
    )
}

export default Header;