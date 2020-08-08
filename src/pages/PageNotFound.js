
import React from 'react'
import { Link } from 'react-router-dom';

export function pageNotFound(props) {






    return (
        <div>
            <h1>Page Not Found!</h1>
            <p>Sorry the page could not be found.</p>
            <p><Link to='/home'>Back to Home Page</Link></p>

        </div>
    )
}


