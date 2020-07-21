import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h1>Error 404! Page not found</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
    </div>
)

export default NotFoundPage