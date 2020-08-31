import React from 'react';
import { Typography, IconButton, makeStyles, CssBaseline, Tabs, Tab, AppBar, Toolbar, Avatar } from '@material-ui/core';
import { Link } from "react-router-dom"





const useStyles = makeStyles(theme => ({
    tabs: {
        flexGrow: 0.5,
    },
    typo: {
        flexGrow: 0.5
    },
    tab: {
        color: "white",
        textTransform: "none"
    }

}));



const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography className={classes.typo} variant="h6">
                        Web Messanger
                </Typography>
                    <Tabs className={classes.tabs} >
                        <Tab label="login" component={Link} to="/login" />
                        <Tab label="signup" component={Link} to="/signup" />
                    </Tabs>
                    <Typography className={classes.typo} variant="h6">
                        Hi Suhail
                </Typography>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
