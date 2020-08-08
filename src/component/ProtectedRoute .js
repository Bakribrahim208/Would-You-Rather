import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, user, ...rest }) => {






    const authlogin = localStorage.getItem('auth');
    return (

        <Route {...rest}

            render={
                props => {
                    return authlogin ? <Component {...rest} {...props} /> :

                        <Redirect as={Link} to='/unauthorized' />

                }
            } />
    )
}

export default ProtectedRoute;