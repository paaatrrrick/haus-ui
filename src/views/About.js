import "../styles/About.css";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="About">
            <h1>About</h1>
            <br />

            <p>Hi, we are Art by Haus. We are ran by two college students who love playing Magic and helping others express their fandom</p>
            <br />
            <p>Our goal is to make the best MTG art for you. We want to make sure that you are happy with your art and that you can show it off to your friends.</p>
            <br />

            <p>All of our posters are made and shipped in the United States</p>
            <br />

            <p>We have spent the past three months perfecting our AI powered digital art making for MTG art. That's why we need 8-15 photos of you that are high quality.</p>
            <br />
            <p>If you have any questions or concerns please feel free to contact us</p>
            <br />
            <br />
            <Link to='/contact' className='default-button'>Contact Us</Link>
        </div>
    );
}

export default About;