import React from 'react';
import "./App.css"
import { ThemeProvider } from "@material-ui/core"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Homepage from './Pages/HomePage/Homepage';

import SignUpPage from './Pages/SignupPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Router>
          <Route path="/" component={Homepage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />


        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
