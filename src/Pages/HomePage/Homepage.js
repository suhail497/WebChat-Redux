import React, { useEffect, useState } from 'react';
import { makeStyles, Box, Paper, Grid, Avatar, Typography, TextField, Button, FormControl } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
    realTimeuser,
    updateMessage,
    realTimeMessage,
    getRealTimeMessages
} from '../../Redux/User/user.action';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { updateMsg } from '../../Redux/User/user.reducer';


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
    Righttypo: {
        textAlign: "center"

    },
    rightpaper: {
        height: "60px"
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
        textAlign: "right"
    },

    chattypo1: {
        padding: "10px",
        backgroundColor: "#e8eaf6",
        width: "fit-content",
        borderRadius: "20px",
        marginTop: "15px",
        textAlign: "left"
    },

    chatarea: {
        height: "88vh"
    },

    grid: {
        height: "100px"
    },
    offline: {
        color: "red",

    },
    online: {
        color: "green"
    },
    time: {
        marginLeft: "10px",
        fontSize: "xx-small"
    }
}))

const User = (props) => {
    const classes = useStyles();
    const { user, onClick } = props;
    return (
        <div onClick={() => onClick(user)}>
            <Box borderBottom={1}>
                <Grid

                    key={user.uid}
                    className={classes.grid}
                    container
                    spacing={3}
                    justify="space-between"
                    alignItems="center"

                >
                    <Grid item
                    >

                        <Avatar>{user.firstName}</Avatar>
                    </Grid>
                    <Grid item xs >
                        <Typography >{user.firstName} {user.lastName}</Typography>
                    </Grid>
                    <Grid item xs >
                        <Typography >
                            {user.isOnline ? <FiberManualRecordIcon className={classes.online} /> : <FiberManualRecordIcon className={classes.offline} />}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )


}


const Homepage = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const user = useSelector(state => state.user)

    const [chatStared, setChatStared] = useState("")
    const [chatUser, setchatUser] = useState('')
    const [message, setMessage] = useState("")
    const [userUid, setUserUid] = useState(null)


    let unsubscribe;





    useEffect(() => {
        unsubscribe = dispatch(realTimeuser(auth.uid))
            .then(unsubscribe => {
                return unsubscribe
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    useEffect(() => {
        return () => {
            //cleanup
            unsubscribe.then(f => f()).catch(error => console.log(error));

        }
    }, []);
    const initChat = (user) => {
        setChatStared(true)
        setchatUser(`${user.firstName} ${user.lastName}`)
        setUserUid(user.uid)
        dispatch(getRealTimeMessages({ uid_1: auth.uid, uid_2: user.uid }))
        // dispatch(realTimeMessage({ uid_1: user.uid, uid_2: auth.uid }))
        // dispatch(realTimeMessage({ uid_1: auth.uid, uid_2: user.uid }));

    }

    const submitMessage = (e) => {
        e.preventDefault();
        const msgObj = {
            user_uid_1: auth.uid,
            user_uid_2: userUid,
            message
        }

        if (message !== "") {
            dispatch(updateMessage(msgObj))
        }
        console.log(msgObj)
    }


    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.left}>
                <Box borderRight={1} borderBottom={1} className={classes.box}>
                    <Paper className={classes.leftpaper}>

                        {

                            user.users.length > 0 ?
                                (user.users.map(user => (
                                    <User key={user.uid} user={user}
                                        onClick={initChat}
                                    />
                                ))) : null
                        }

                    </Paper>

                </Box>
            </div>
            <div className={classes.right}>
                {/* <RightSidebar /> */}

                <Paper className={classes.rightpaper}>
                    <Grid
                        // className={classes}
                        container
                        spacing={3}
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs className={classes.chatname} >
                            {/* <Typography className={classes.Righttypo} ></Typography>
                            <Typography className={classes.typo} ></Typography> */}
                            {
                                chatStared ? chatUser : ''
                            }

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


                        {/* <div className="messageSections">
                            {
                                chatStared ?
                                    user.conversations.map(con =>
                                        <div style={{ textAlign: con.user_uid_1 == auth.uid ? 'right' : 'left' }}>
                                            <p className="messageStyle" >{con.message}</p>
                                        </div>)
                                    : null
                            }


                        </div> */}

                        <Grid item xs >



                            {
                                chatStared ?
                                    user.conversations.map(con =>

                                        (<Typography
                                            className={`classes.chattypo ${con.user_uid_1 == auth.uid}? classes.chattypo:classes.chattypo1 `}
                                            // style={{ textAlign: con.user_uid_1 == auth.uid ? "right" : "left" }} 
                                            key={con.id} >{con.message}
                                            <span className={classes.time}>  {
                                                new Date(con.createdAt?.toDate()).toUTCString()
                                            }
                                            </span>
                                        </Typography>)
                                    )
                                    : ""
                            }

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
                                {chatStared ?

                                    (
                                        <Grid item xs>

                                            <FormControl>

                                                <TextField
                                                    value={message}
                                                    className={classes.input}
                                                    placeholder="send the message"
                                                    onChange={e => setMessage(e.target.value)}
                                                />
                                                <button onClick={submitMessage}>send</button>
                                            </FormControl>
                                        </Grid>
                                    ) : null

                                }


                            </Grid>
                        </Paper>
                    </Box>
                </div>

            </div>
        </div>
    );
};

export default Homepage;
