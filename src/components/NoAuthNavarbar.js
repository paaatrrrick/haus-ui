import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import "../styles/navbar.css"
import { Link, useLocation } from "react-router-dom";
import ErrorMessage from './Error';




const NoAuthNavbar = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const url = useLocation();
    var route = 'Home';
    var location = '/';
    var showFooter = true;
    if (url.pathname === '/') {
        route = 'Get Started';
        location = '/getting-started';
        showFooter = false;
    }
    return (
        <div className='parentDiv'>
            {errorMessage && (
                <ErrorMessage message={errorMessage} onClose={() => { setErrorMessage('') }} />
            )}
            <div className='navbar'>
                <p>art by haus</p>
                <Link className='navbarLink' to={location}>{route}</Link>
            </div>
            <Outlet context={{ setErrorMessage: setErrorMessage }} />
        </div>
    )

}

export default NoAuthNavbar