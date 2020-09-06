import React from 'react';
import { Typography, makeStyles, Paper, Box, CssBaseline, Card, Container, Avatar, Grid } from '@material-ui/core';
import { useSelector } from "react-redux"
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    box: {
        height: "100vh"
    },




}))

const LeftSiderBar = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Box borderRight={1} borderBottom={1} className={classes.box}>
                    <Paper className={classes.paper}>
                        <Grid
                            className={classes.grid}
                            container
                            spacing={3}
                            justify="space-between"
                            alignItems="center"

                        >
                            <Grid item>
                                <Avatar>W</Avatar>
                            </Grid>
                            <Grid item xs >
                                <Typography >suhail</Typography>
                            </Grid>
                            <Grid item xs >
                                <Typography >online</Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                </Box>
            </div>
        </>
    );
};

export default LeftSiderBar;
