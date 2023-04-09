import React, { useEffect } from 'react';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ message, onClose }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose();
        }, 15000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return (
        <div className="error-message">
            <span className="error-message__text">{message}</span>
            <button className="error-message__close" onClick={onClose}>x</button>
        </div>
    );
};

export default ErrorMessage;