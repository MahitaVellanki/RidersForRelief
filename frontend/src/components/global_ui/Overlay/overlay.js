import React from 'react'
import './overlayStyles.css'

//for confirmation page 
// type
//operation if yes
// are necessary

function DelivaryStatus({
    dialogType,//dialogbox type
    message,// message on dialog
    closeOverlay,
    type,// used for confirmation type : cancel or confirm
    display,//css prop
    operation//function to be performed on pressing yes
    }) {
    
    const error="error";
    const confirmation="confirmation";

    return (
        <div className="overlay" style={{ display:`${display}`}}>
            <div className="overlay-content"> 

                {/* Shows Dynamic Content for cancelling and confirmation */}            
                <p className="message">
                {message}
                </p>  

                {/* Buttons Performing Operations */}
                {
                    (dialogType==confirmation) &&
                    <span className="btn-container">
                        <button className="yes" onClick={()=>operation(type)}>YES</button>
                        <button className="no" onClick={()=>closeOverlay(type)}>NO</button>
                    </span>
                }
                {
                    (dialogType==error)&&
                    <span >
                        <button className="ok" onClick={()=>closeOverlay()}>OK</button>
                    </span>
                }               
                
            </div>              
        </div>
    )
}

export default DelivaryStatus;
