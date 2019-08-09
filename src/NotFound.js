import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div id="NotFound">
        <div>
            <h1>Page not found.</h1>
            <p>Click here for <Link to="/"> home</Link></p>
            </div>    
        </div>
    )
}

export default NotFound;