import React, { useEffect } from 'react';
import { makeStyles, Box, Paper, Grid, Avatar, Typography, TextField } from '@material-ui/core';
// import Layout from '../../Components/Layout/Layout';
import Header from '../../Components/Header/Header';
// import LeftSiderBar from '../../Components/SiderBar/LeftSiderBar';
// import RightSidebar from '../../Components/SiderBar/RightSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { realTimeuser } from '../../Redux/User/user.action';



const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "colunn",
        marginTop: "75px"
    },

    left: {
        flexGrow: 0.2,
        // background: "#F1F3F6",
    },
    right: {
        // display: "flex",
        // flexDirection: "column",
        flex: 0.8,
    },
    box: {
        height: "100vh"
    },
    typo: {
        textAlign: "center"
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
        marginLeft: "10px",

    },
    chatarea: {
        height: "88vh"
    }
}))


const Homepage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)


    useEffect(() => {
        dispatch(realTimeuser(auth.uid))
    }, [])

    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.left}>
                <Box borderRight={1} borderBottom={1} className={classes.box}>
                    <Paper className={classes.paper}>
                        {
                            user.users.length > 0 ?
                                (user.users.map(user => (
                                    <Grid
                                        key={user.uid}
                                        className={classes.grid}
                                        container
                                        spacing={3}
                                        justify="space-between"
                                        alignItems="center"

                                    >
                                        <Grid item>
                                            <Avatar>{user.firstName}</Avatar>
                                        </Grid>
                                        <Grid item xs >
                                            <Typography >{user.firstName} {user.lastName}</Typography>
                                        </Grid>
                                        <Grid item xs >
                                            <Typography >
                                                {user.isOnline ? "Online" : "offline"}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                ))) : null
                        }

                    </Paper>

                </Box>
            </div>
            <div className={classes.right}>
                {/* <RightSidebar /> */}

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
        </div>
    );
};

export default Homepage;
