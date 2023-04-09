import '../styles/ThankYou.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const ThankYou = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='ThankYou'>
            <div className='ThankYou-content'>
                <h1 className='ThankYou-h1'>Thank you for your order!</h1>
                <p className='ThankYou-p1'>We will reach out to you within a day or two to get your feedback on the design we have made. We'll ask for payment then through Venmo or PayPal and then ship your poster.</p>
                <p className='ThankYou-p2'>If you have any questions feel free to reach out at patrick.123.foster@gmail.com</p>
                <Link to='/home' className='big-button' style={{ marginTop: '20px', width: "100px", fontSize: '18px', height: "30px" }}>Home</Link>
            </div>
        </div>
    )
}


export default ThankYou;