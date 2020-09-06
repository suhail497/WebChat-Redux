import React, { useEffect } from 'react';
import "./App.css"
import { ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from './Pages/HomePage/Homepage';

import SignUpPage from './Pages/SignupPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import theme from './theme';

import { isLoggedInUser } from './Redux/User/authSign';
import { useSelector, useDispatch } from "react-redux"
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(isLoggedInUser())
    }
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>



        <Router>
          {/* <Header > */}
          <PrivateRoute path="/" exact component={Homepage} />
          {/* <Route path="/" exact component={Homepage} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />

          {/* </Header> */}
        </Router>

      </ThemeProvider>
    </div>
  );
}

export default App;
