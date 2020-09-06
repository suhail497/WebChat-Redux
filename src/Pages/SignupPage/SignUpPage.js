import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import { makeStyles, TextField, Box, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { signUpReducer } from '../../Redux/User/authSign';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {


        // marginLeft: "500px"s
        display: "flex",
        flexDirection: "column"

    },
    textField: {
        marginBottom: "20px",
        width: "300px"
    },
    butoon: {

    }
}));

const SignUpPage = () => {
    const classes = useStyles();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    // const registerDetails = (e) => {
    //     e.preventDefault();
    //     const user = {
    //         firstName, lastName, email, password
    //     }
    //     dispatch(signUpReducer(user))
    // }

    const registerDetails = (e) => {
        e.preventDefault()
        const user = {
            firstName, lastName, email, password
        }
        // dispatch(signUpReducer(user))
        dispatch(signUpReducer(user))
    }
    if (auth.authenticated) {
        return <Redirect to="/" />

    }
    return (
        <>
            <Header />


            <Container >

                <Box >
                    <form onSubmit={registerDetails}
                        className={classes.root}>
                        <TextField
                            className={classes.textField}
                            label="First Name"
                            name="firstname"
                            placeholder="First Name"
                            value={firstName}
                            type="text"
                            variant='outlined'
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            className={classes.textField}
                            name="last name"
                            label="Last Name"
                            placeholder="Last Name"
                            value={lastName}
                            type="text"
                            variant='outlined'
                            onChange={(e) => setLastName(e.target.value)}
                        />
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
                            Signup
                    </button>
                    </form>

                </Box>

            </Container>


        </>
    );
};

export default SignUpPage;