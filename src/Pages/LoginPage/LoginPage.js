import React, { useState } from 'react';
import { makeStyles, TextField, CssBaseline, Box, Container } from '@material-ui/core';
import Header from '../../Components/Header/Header';
import { useDispatch, useSelector } from "react-redux"
import { signInReducer } from '../../Redux/User/authSign';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    root: {

        display: "flex",
        flexDirection: "column"
    },
    textField: {
        marginBottom: "20px",
        width: "300px"
    },


}));

const LoginPage = () => {
    const classes = useStyles();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)


    const registerSignin = (e) => {
        e.preventDefault();
        if (email == "") {
            alert("Email is Required")
            return
        }
        if (password == "") {
            alert("Password is Required")

            return
        }

        dispatch(signInReducer({ email, password }))
    }
    if (auth.authenticated) {
        return <Redirect to={'/'} />
    }


    return (
        <>

            <Header />
            <CssBaseline />
            <Container >
                <Box >
                    <form className={classes.root}
                        onSubmit={registerSignin}>
                        <TextField
                            className={classes.textField}
                            label='Email'
                            variant='outlined'
                            name="email"
                            placeholder="email"
                            value={email}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            className={classes.textField}
                            label="Password"
                            name="password"
                            variant='outlined'
                            placeholder="Password"
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className={classes.butoon}  >
                            Login
                    </button>
                    </form>
                </Box>
            </Container>


        </>
    );
};


export default LoginPage;