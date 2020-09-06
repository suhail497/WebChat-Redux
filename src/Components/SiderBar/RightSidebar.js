import React from 'react';
import { Box, Typography, makeStyles, TextField, Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: "63px",
        background: "#757de8"
    },
    typo: {
        textAlign: "center"
    },
    chatarea: {
        height: "50vh"
    },
    input: {
        width: "80%"
    },
    chattypo: {
        padding: "10px",
        backgroundColor: "#e8eaf6",
        width: "fit-content",
        borderRadius: "20px",
        marginTop: "15px",
        marginLeft: "10px"
    }

}));

const RightSidebar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid
                        className={classes.grid}
                        container
                        spacing={3}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs >
                            <Typography className={classes.typo} >suhail</Typography>
                            <Typography className={classes.typo} >Last Seen at...</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <div className={classes.chatarea}>

                    <Grid
                        className={classes.grid}
                        container
                        spacing={3}
                        justify="space-between"
                    // alignItems="center"
                    >
                        <Grid item xs >
                            <Typography className={classes.chattypo} >suhail</Typography>
                            {/* <Typography className={classes.chattypo} >Last Seen at...</Typography> */}
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.footor}>
                    <Box borderTop={1}>
                        <Paper>
                            <Grid container
                                justify="space-around"
                            >

                                <Grid item xs>
                                    <form>
                                        <TextField

                                            // multiLine={false}
                                            // rows={1}
                                            className={classes.input}
                                            placeholder="send the message"
                                        />
                                        <button>send</button>
                                    </form>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </div>
            </div>

        </>
    );
};

export default RightSidebar;
