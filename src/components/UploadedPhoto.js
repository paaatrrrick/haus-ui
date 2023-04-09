const UploadedPhoto = ({ photo, handlePhotoRemove, index }) => {
    return (
        <div key={index} className={`picturesList`}>
            <img src={URL.createObjectURL(photo)} alt={photo.name} className={`uploadedPhotoDisplayImg`} />
            <button onClick={() => handlePhotoRemove(index)} className='hoverButtonPhoto'>x</button>
        </div>
    );
}

export default UploadedPhoto;