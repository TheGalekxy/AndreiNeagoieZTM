import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
<<<<<<< HEAD
                <img id='inputimage' src={imageUrl} alt='face recognition' width='500px' height='auto'/>
            <div className='surrounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
=======
                <img id='inputimage' alt='face recognition' src={imageUrl} width='500px' height='auto'/>
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div> 
            {/* Fixed the bug above which was the result of misspelling 'bottomRow' as 'bottowRow' */}
>>>>>>> f60e984f5af59c5a560cef639de9e1bea4e2918d
            </div>
        </div>
    )
}

export default FaceRecognition;