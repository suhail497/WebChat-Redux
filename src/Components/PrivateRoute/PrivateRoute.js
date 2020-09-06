import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
    return (
        <div>
            {/* <Route {...otherProps} component={component} /> */}
            <Route {...otherProps} component={(props) => {
                const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
                if (user) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={"/login"} />
                }

            }}


            />


        </div>
    );
}

export default PrivateRoute;
