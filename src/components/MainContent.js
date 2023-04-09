import React, { useContext, useState } from "react";
import { DisplayContext } from "../utils/context";
import fiveByFive from "../resources/asdf.png";
import oneByOne from "../resources/00027.png";
import { Navigate } from "react-router-dom";
import LargeCarousel from "./LargeCarousel";
import "../styles/MainContent.css"
import Footer from './Footer';



import azorious from "../resources/carousel/azorious.png";
import flying from "../resources/carousel/flying.png";
import gold from "../resources/carousel/gold.png";
import jsGOod from "../resources/carousel/j2GOod.png";
import jamesGood from "../resources/carousel/jamesGood.png";
import reed from "../resources/carousel/reed.png";
import vinny from "../resources/carousel/vinny.png";
import vinnyGood from "../resources/carousel/vinnyGood.png";



const MainContent = (props) => {
    const [redirect, setRedirect] = useState(false);
    const showButton = props.showButton;
    const { isMobile } = useContext(DisplayContext);
    const images = [azorious, vinnyGood, jamesGood, flying, reed, vinny, gold, jsGOod];

    if (redirect) {
        return <Navigate to="/getting-started" />
    }

    return (
        <div className="MainContent">
            <div className="main-container">
                {(isMobile) ?
                    <div className="mobile-main-content">
                        <img src={fiveByFive} alt="5x5" />
                        <button className="default-button" onClick={() => { setRedirect(true) }}>Get Started</button>

                        <h4 className="main-text-h4">Own a Custom Magic the Gathering Poster of Yourself!</h4>
                        <p className="main-text-p">Imagine having a unique piece of art that captures your love for the game by featuring you as a part of the MTG universe.</p>
                    </div>
                    :
                    <div className="desktop-main-content">
                        <img src={oneByOne} alt="1x1" />
                        <div className="desktop-main-text">
                            <h4 className="main-text-h4">Custom Magic Poster of you!</h4>
                            <p className="main-text-p">Imagine having a unique piece of art that captures your love for the game by featuring you as a part of the MTG universe.</p>
                            <button className="default-button inverse-button" onClick={() => { setRedirect(true) }}> Get Started</button>
                            <p className="main-text-tinytext">only pay when you recieve your portait</p>
                        </div>
                    </div>
                }
                <div className="carousel-container-main">
                    <LargeCarousel photos={images} />
                </div>

                {(!isMobile) &&
                    <div className="main-second-text">
                        <div>
                            <h4>Easy and Risk-Free Process.</h4>
                            <p>Simply upload 8-15 pictures of yourself, and we'll take care of the rest. You only pay once you're satisfied with the art created.</p>
                            <button className="default-button" onClick={() => { setRedirect(true) }}>Try it out</button>
                        </div>
                    </div>
                }
            </div>
            <Footer />
        </div >
    )
}

export default MainContent;