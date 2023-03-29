import React, { useState } from 'react';
import { routes, constants } from '../constants';
import MainContent from '../components/MainContent';
import james from "../resources/mtg-james.png";
import reed from "../resources/reed.png";
import vinny from "../resources/vinny.png";
import jamesGood from "../resources/jamesGood.png";
import vinnyGood from "../resources/vinnyGood.png";
import j2GOod from "../resources/j2GOod.png";
import ImageCarousel from '../components/ImageCarousel';
import "../styles/Form.css";
import UploadedPhotos from '../components/UploadedPhotos';
import Dropdown from '../components/Dropdown';

const options = [
    { value: 'digital-art', label: 'Digital Art', price: '$15' },
    { value: '5x7-in', label: '5x7 in', price: '$25' },
    { value: '6x8-in', label: '6x8 in', price: '$30' },
    { value: '8x10-in', label: '8x10 in', price: '$30' },
    { value: '11x14-in', label: '11x14 in', price: '$35' },
    { value: '12x18-in', label: '12x18 in', price: '$40' },
    { value: '20x28-in', label: '20x28 in', price: '$45' },
    { value: '24x36-in', label: '24x36 in', price: '$50' },
    { value: '30x40-in', label: '30x40 in', price: '$60' },
];

const useInput = (initialValue) => {
    const [value, valueSetter] = useState(initialValue);
    const setValue = (e) => {
        valueSetter(e.target.value)
    }
    return [value, setValue]
}


const Form = () => {
    const [email, setEmail] = useInput('');
    const [name, setName] = useInput('');
    const [magicStyle, setMagicStyle] = useInput('');
    const [photos, setPhotos] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    console.log(selectedOption);
    const handlePhotoUpload = (e) => {
        setPhotos([...photos, ...e.target.files]);
    };

    const handlePhotoRemove = (index) => {
        setPhotos(photos.filter((_, i) => i !== index));
    };

    const images = [
        jamesGood,
        vinnyGood,
        j2GOod,
    ];

    const handleSubmit = async () => {
        setSubmitting(true);
        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dlk3ezbal/image/upload';
        const urls = [];
        if (constants.testing) {
            urls.push("https://res.cloudinary.com/dlk3ezbal/image/upload/v1679927991/haus/leortpy9wxwlhheel31o.png")
            urls.push("https://res.cloudinary.com/dlk3ezbal/image/upload/v1679927993/haus/fl8wybk0w0dlakwprmu2.png")
        } else {
            for (let photo of photos) {
                const formData = new FormData();
                formData.append('file', photo);
                formData.append("upload_preset", 'hauspreset');
                const res = await fetch(CLOUDINARY_URL, {
                    method: "POST",
                    body: formData
                })
                const data = await res.json();
                const url = data.secure_url;
                urls.push(url);
            }
        }
        console.log('here')
        console.log(urls);
        const res = await fetch(routes.apiEndpoint + routes.createOrder, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                name,
                magicStyle,
                photos: urls,
            }),
        });
        const data = await res.json();
        setPhotos([]);
        setSubmitting(false);
    };



    return (

        <div className="Home">
            <div className="Home-section">
                <section className="formTopSection">
                    <div className="Carousel-parent">
                        <ImageCarousel images={images} />
                    </div>
                    <section className="userInputsFormDiv">
                        <div className="text-forms">
                            <div>
                                <p>Email: </p>
                                <input type="text" id="email" value={email} onChange={setEmail} placeholder="ex: john.doe@gmail.com" />
                            </div>
                            <div>
                                <p>Name: </p>
                                <input type="text" id="email" value={name} onChange={setName} placeholder="ex: john doe" />
                            </div>
                            <div>
                                <p>Favorite Magic Sets: </p>
                                <input type="text" id="email" value={magicStyle} onChange={setMagicStyle} placeholder="ex: Eldrazi" />
                            </div>
                            <div>
                                <p>Poster Size: </p>
                                <Dropdown setSelectedOption={setSelectedOption} selectedOption={selectedOption} options={options} />
                            </div>
                            <div>
                                <p>Upload 8-15 pictures of yourself</p>
                                <label htmlFor="photos" style={{ width: '318px' }} className='big-button'>Upload Photos</label>
                                <input accept="image/*" type="file" id="photos" multiple onChange={handlePhotoUpload} style={{ display: 'none' }} />
                            </div>
                            {
                                (!submitting ?
                                    <div
                                        onClick={handleSubmit}
                                        className='big-button bb2'
                                        style={{ marginTop: '20px', width: '318px' }}>
                                        <p className='SUBMIT'>Submit</p>
                                        <span className='price'> | {selectedOption.price}</span>
                                    </div>
                                    :
                                    <p>Submitting...</p>
                                )
                            }
                        </div>
                        <UploadedPhotos photos={photos} handlePhotoRemove={handlePhotoRemove} />

                    </section>
                </section>
                <MainContent />
            </div>
        </div >



    );
};

export default Form;