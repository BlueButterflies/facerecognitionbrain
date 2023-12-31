import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
    return (
        <div className="center">
            <div className="absolute mt2">
                <img id="inputImage" className="br4 shadow-3" src={imgUrl} alt="" width={'500px'} height={'auto'}/>
                <div className="bounding-box"
                     style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>
    );
}

export default FaceRecognition