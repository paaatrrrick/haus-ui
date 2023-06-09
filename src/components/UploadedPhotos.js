import UploadedPhoto from './UploadedPhoto';
import { useMemo } from 'react';
const GRID_WIDTH = 3

const UploadedPhotos = ({ photos, handlePhotoRemove }) => {
    // const photosArr = useMemo(() => {
    //     const totalArr = []
    //     for (let i = 0; i < Math.ceil(photos.length / GRID_WIDTH); i++) {
    //         const sublet = [];
    //         for (let j = 0; j < GRID_WIDTH; j++) {
    //             const index = i * GRID_WIDTH + j
    //             if (photos[index]) {
    //                 sublet.push(photos[index])
    //             }
    //         }
    //         totalArr.push([...sublet]);
    //     }

    //     return totalArr
    // }, [photos])

    /* {photosArr.map((sublet, i) => {
                            return (
                                <div key={`photosArr${i}`} className='displayPhotosRow'>
                                    {photosArr[i].map((photo, j) => {
                                        return (<UploadedPhoto photo={photo} handlePhotoRemove={handlePhotoRemove} index={i * GRID_WIDTH + j} key={i * GRID_WIDTH + j} />)
                                    })}
                                </div>
                            )
                        })} */

    return (
        <div className='UploadedPhotosParent'>
            {photos.map((photo, i) => {
                return (<UploadedPhoto photo={photo} handlePhotoRemove={handlePhotoRemove} index={i} key={i} />)
            })}
        </div>
    );
}
export default UploadedPhotos;