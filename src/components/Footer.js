import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText('example@example.com');
        setCopySuccess(true);
    };

    const onAnimationEnd = () => {
        setCopySuccess(false);
    };

    return (
        <div className="Footer-container">
            <div className="Footer-links">
                <div className="link-column">
                    <Link className='navbarLink' to='/contact'>Contact</Link>
                    <Link className='navbarLink' to='/'>Home</Link>
                </div>
                <div className="link-column">
                    <Link className='navbarLink' to='/getting-started'>Shop</Link>
                    <Link className='navbarLink' to='/about'>About</Link>
                </div>
            </div>
            <div className="Footer-right-content">
                <h2>Thanks for checking out art by haus</h2>
            </div>
        </div>
    );
};

export default Footer;