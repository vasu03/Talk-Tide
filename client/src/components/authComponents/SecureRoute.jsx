// Importing required modules
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Creating a component to secure specific routes
const SecureRoute = ({ children, user, redirect="/login" }) => {
    // Check if the user is not available then redirect given (default or specific) route
    if(!user){
        return <Navigate to={redirect} />
    } else {
        // else return the children element of SecureRoute or The Outlet(satisfyingly available)
        return children ? children : <Outlet />;
    }

};

// Exporting the component
export default SecureRoute;