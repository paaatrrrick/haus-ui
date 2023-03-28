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
        let randNum = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        let directoryName = email + randNum;
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

    console.log(photos);

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
                                <p>Upload 8-15 pictures of yourself</p>
                                <label htmlFor="photos" className='big-button'>Upload photos</label>
                                <input accept="image/*" type="file" id="photos" multiple onChange={handlePhotoUpload} style={{ display: 'none' }} />
                            </div>
                            {photos.length > 0 && !submitting && email && name && magicStyle && (
                                <button onClick={handleSubmit} className='big-button' style={{ marginTop: '20px' }}>Submit</button>
                            )}
                            {submitting && <p>Submitting...</p>}
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