import { useEffect } from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='ThankYou'>
            <div className='ThankYou-content'>
                <h1 className='ThankYou-h1'>How to Contact Us</h1>
                <p className='ThankYou-p1'>Feel free to give us an eamil at : <span style={{ fontWeight: '600' }}>patrick.123.foster@gmail.com</span></p>
                <p className='ThankYou-p2'>We should be able to respond within the day</p>
                <Link to='/' className='default-button' style={{ marginTop: '20px', width: "100px", fontSize: '18px', height: "30px" }}>Home</Link>
            </div>
        </div>
    )
}


export default Contact;