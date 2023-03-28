import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import "../styles/navbar.css"
import { Link } from "react-router-dom";


const NoAuthNavbar = () => {
    const [error, setError] = useState('');

    return (
        <>
            <div className='navbar'>
                <p>art by haus</p>
                {/* <Link className='navbarLink' to='/'>Get Started</Link> */}
            </div>
            <Outlet context={{ setError: setError }} />
        </>
    )

}

export default NoAuthNavbar