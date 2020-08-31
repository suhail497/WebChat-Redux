import React, { useState } from 'react';
import { makeStyles, TextField, FormControl, Button, CssBaseline, Box, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "20px",
        marginLeft: "400px"
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


    return (
        <>
            <CssBaseline />
            <Container >
                <Box >
                    <FormControl className={classes.root} >
                        <TextField
                            className={classes.textField}
                            id="email;"
                            label="Email"
                            placeholder="Enter the email"
                            type="text"
                            value={email}
                            variant='outlined'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            className={classes.textField}
                            type="password"
                            id="password"
                            label="Password"
                            value={password}
                            placeholder="Enter the Password"
                            variant='outlined'

                            onChange={(e) => setPassword(e.target.value)}
                        //   onChange={}

                        />
                        <Button ClassName={classes.butoon} color="primary" variant="contained" >
                            Login
                </Button>
                    </FormControl>
                </Box>
            </Container>


        </>
    );
};


export default LoginPage;
