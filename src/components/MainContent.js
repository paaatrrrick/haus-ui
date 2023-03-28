import james from "../resources/mtg-james.png";
import reed from "../resources/reed.png";
import vinny from "../resources/vinny.png";
import { Link } from "react-router-dom";

const MainContent = (props) => {
    const showButton = props.showButton;
    return (
        <>
            <section className="section">
                <div className="first-section-text">
                    <h1>Custom Magic: The Gathering Portraits</h1>
                    <h4>Gets posters and digital art of you in the MTG style</h4>
                    {showButton && <Link to='/' className='big-button' style={{ marginTop: '40px' }}>Get Started</Link>}
                </div>
                <img src={james} className='firstPicture' />
            </section>
            <section className="section reverse-section">
                <div className="first-section-text">
                    <h1>Upload a dozen photos of yourself</h1>
                    <h4>Just give us a few photos of you and your favorite sets</h4>
                </div>
                <img src={reed} className='firstPicture' />
            </section>
            <section className="section">
                <div className="first-section-text">
                    <h1>We will handle the rest</h1>
                    <h4>Give us 7-14 days to make you into a masterpiece</h4>
                </div>
                <img src={vinny} className='firstPicture' />
            </section>
        </>
    )
}

export default MainContent;