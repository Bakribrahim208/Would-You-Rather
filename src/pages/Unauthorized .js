import React from 'react';
import { Link } from 'react-router-dom';


export function Unauthorized(props) {
    return (
        <div >
            <div  >


            </div>
            <div  >
                <h1>403 - You Shall Not Pass</h1>
                <p>Uh oh
                    <br /> Must Login First
                    </p>
            </div>
            <p><Link to='/'>Back to Login</Link></p>
        </div>
    )
}

