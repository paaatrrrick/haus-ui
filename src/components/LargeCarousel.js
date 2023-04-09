import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/LargeCarousel.css';
import { DisplayContext } from '../utils/context';


const ImageCarousel = ({ photos }) => {
    const { isMobile } = useContext(DisplayContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const imageSize = isMobile ? 130 : 300;
    const imageMargin = isMobile ? 10 : 20;; // Add the margin size used in the CSS file

    const slideImages = (direction) => {
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < photos.length) {
            setCurrentIndex(newIndex);
            carouselRef.current.style.transform = `translateX(-${newIndex * (imageSize + imageMargin)}px)`;
        }
    };

    const carouselRefWidth = carouselRef.current;
    if (carouselRefWidth) {
        console.log(carouselRefWidth.style);
        console.log(carouselRefWidth.style.width);
    }

    useEffect(() => {
        const carouselWidth = carouselRef.current.offsetWidth;
        console.log('Carousel width:', carouselWidth);
    }, []);

    return (
        <div className="carousel-container">
            {currentIndex > 0 && (
                <button
                    className="carousel-button carousel-button-left"
                    onClick={() => slideImages(-1)}
                >
                    {'<'}
                </button>
            )}
            <div className="carousel-images" ref={carouselRef}>
                {photos.map((photo, index) => (
                    <div key={index} className="carousel-image-container">
                        <img src={photo} alt={`carousel-image-${index}`} className="carousel-image" />
                    </div>
                ))}
            </div>
            {currentIndex < photos.length - (isMobile ? 2 : 4) && (
                 <button
                    className="carousel-button carousel-button-right"
                    onClick={() => slideImages(1)}
                >
                    {'>'}
                </button>
            )}
        </div>
    );
};

export default ImageCarousel;