import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onBtnSubmit}) => {
    return (
        <div>
            <p className="f3 white">
                {
                    'This Magic Brain will detect faces in your pictures. Git it a try.'
                }
            </p>

            <div className="center">
                <div className="form center pa3 br3 shadow-5">
                    <input className="f4 pa3 w-70 center" 
                           type="text"
                           onChange={onInputChange}
                    />
                    <button className="w-30 grow f3 link ph3 pv dib white" 
                            onClick={onBtnSubmit}
                    >
                        Detect
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default ImageLinkForm