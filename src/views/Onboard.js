import React, { useState } from 'react';
import { routes, constants } from '../constants';
import Dropdown from '../components/Dropdown';
import UploadedPhotos from '../components/UploadedPhotos';
import { Navigate, useOutletContext } from 'react-router-dom';
import "../styles/Onboard.css";
import "../styles/Form.css";
import Loading from '../components/Loading';
import { trackEventForEvent } from '../utils/analytics';




// import { useHistory } from 'react-router-dom';
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


const Onboard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [magicStyle, setMagicStyle] = useState('');
    const [photos, setPhotos] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const { setErrorMessage } = useOutletContext();


    const handlePhotoUpload = (e) => {
        setPhotos([...photos, ...e.target.files]);
    };

    const handlePhotoRemove = (index) => {
        setPhotos(photos.filter((_, i) => i !== index));
    };
    // const history = useHistory();

    const handleNext = () => {
        if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
    };

    const handleBack = () => {
        if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        trackEventForEvent('conversion', 'order', 'submit', 1);
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
        if (res.status !== 200) {
            setErrorMessage("Something went wrong, please try again later");
            setSubmitting(false);
        } else {

            setShouldRedirect(true);
        }
        setPhotos([]);
    };

    const isNextDisabled = () => {
        switch (currentSlide) {
            case 0:
                return !magicStyle;
            case 1:
                return !name || !email;
            case 2:
                return photos.length < 8 || photos.length > 20;
            default:
                return true;
        }
    };

    if (shouldRedirect) {
        return <Navigate to="/thank-you" />

    }


    return (
        <div className='Onboard'>
            {currentSlide === 0 && (
                <>
                    <div style={{ width: '100%' }}>
                        <h1>What's your favortite MTG sets / cards</h1>
                        <p className='onboard-p'>We'll craft your art to look like these styles</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Ex: Modern Horizons, Zendikar Rising, etc."
                        value={magicStyle}
                        className='Onboard-input Big'
                        onChange={(e) => setMagicStyle(e.target.value)}
                    />
                </>
            )}
            {currentSlide === 1 && (
                <>
                    <h1>What's your name and email</h1>
                    <div className="Onbard-inputsName-Email">
                        <input
                            type="text"
                            placeholder="First & Last Name"
                            className='Onboard-input'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            className='Onboard-input'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </>
            )}
            {currentSlide === 2 && (
                <>
                    <div style={{ width: '100%' }}>
                        <h1>Share pictures and a poster size</h1>
                        <p className='onboard-p' style={{
                            marginBottom: "0px"
                        }}>8-15 high quality pictures of yourself yeilds the best results. Note: you only pay once you recieve your art</p>
                    </div>
                    <div className='onboard-upload-buttons'>
                        <label htmlFor="photos" className='upload-photos-button'>Upload Photos</label>
                        <Dropdown setSelectedOption={setSelectedOption} selectedOption={selectedOption} options={options} />
                        <input accept="image/*" type="file" id="photos" multiple onChange={handlePhotoUpload} style={{ display: 'none' }} />
                    </div>
                    <UploadedPhotos photos={photos} handlePhotoRemove={handlePhotoRemove} />
                </>
            )}
            <div className='ButtonBar'>
                {currentSlide > 0 ? (
                    <button onClick={handleBack}>Back</button>
                ) : (
                    <div></div>
                )}
                {currentSlide < 2 ? (
                    <button onClick={handleNext} disabled={isNextDisabled()} className={(isNextDisabled() ? 'disabled-button' : undefined)}>
                        Next
                    </button>
                ) : (
                    submitting ? (
                        <Loading canCloseTab={false} />
                    ) : (
                        < button onClick={handleSubmit} disabled={isNextDisabled()} className={(isNextDisabled() ? 'disabled-button' : 'enabled-button')}>
                            <p className='SUBMIT'>Submit</p>
                            <span className='price'> | {selectedOption.price}</span>
                        </button>
                    )
                )}
            </div>
        </div >
    );
};

export default Onboard;