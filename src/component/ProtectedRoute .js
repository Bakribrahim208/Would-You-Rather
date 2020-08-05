import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: Component, user, ...rest }) => {

    const auth = useSelector(state => state.auth)

    return (
        <Route {...rest} render={
            props => {
                return auth.islogin ? <Component {...rest} {...props} /> :

                    <Redirect as={Link} to='/unauthorized' />

            }
        } />
    )
}

export default ProtectedRoute;