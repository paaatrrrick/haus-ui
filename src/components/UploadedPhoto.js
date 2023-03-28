const UploadedPhoto = ({ photo, handlePhotoRemove, index }) => {

    const isMiddle = index % 3 === 1;
    console.log(isMiddle);

    return (
        <div key={index} className={`picturesList ${(index % 3 === 1) && 'middleImage'}`}>
            <img src={URL.createObjectURL(photo)} alt={photo.name} className={`uploadedPhotoDisplayImg`} />
            <button onClick={() => handlePhotoRemove(index)} className='hoverButtonPhoto'>x</button>
        </div>
    );
}

export default UploadedPhoto;