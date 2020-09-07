import React from 'react';
import { Typography, makeStyles, Tabs, Tab, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom"
// import SignUpPage from '../../Pages/SignupPage/SignUpPage';
// import LoginPage from '../../Pages/LoginPage/LoginPage';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useSelector, useDispatch } from "react-redux"
import { isLoggedOut } from '../../Redux/User/authSign';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}








const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "20px",
    },
    tabs: {
        flexGrow: 0.5,
    },
    typo: {
        flexGrow: 0.5
    },
    tab: {
        color: "white",
        textTransform: "none"
    },
    Link: {
        // textTransform: "none"
        textDecoration: "none"
    }

}));



const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const auth = useSelector(state => state.auth)
    return (
        <div>
            <React.Fragment>
                <ElevationScroll>

                    <AppBar position="fixed" color="primary">
                        <Toolbar>
                            <Typography className={classes.typo} variant="h6">
                                Web Messanger
                                 </Typography>

                            {
                                (!auth.authenticated) ?
                                    (<Tabs className={classes.tabs} value={value} onChange={handleChange}
                                        indicatorColor="primary" >
                                        <Tab label="login" component={Link} to="/login" />
                                        <Tab label="signup" component={Link} to="/signup" />
                                    </Tabs>) : null
                            }


                            <Typography className={classes.typo} variant="h6">
                                {
                                    auth.authenticated ? `Hi ${auth.firstName} ${auth.lastName}` : ""
                                }
                            </Typography>

                            {
                                auth.authenticated ? <Link to={'#'} onClick={() => {
                                    dispatch(isLoggedOut(auth.uid))
                                }}>Logout</Link> : null
                            }

                        </Toolbar>
                    </AppBar>
                </ElevationScroll>

                <div className={classes.toolbarMargin} />
            </React.Fragment>
        </div>
    );
};

export default Header;
