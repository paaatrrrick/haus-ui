import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="" />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;