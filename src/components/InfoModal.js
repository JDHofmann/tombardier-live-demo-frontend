import React from 'react'

export const InfoModal = (props) => {
    console.log(this)
    return(

        <>
        <div
            className="modal"
            role="dialog" 
            aria-labelledby="dialog-title" aria-describedby="dialog-description"
        >
            <h1>Welcome to Tombardier</h1>
            <button 
                className="infoModalBtn"
                onClick={props.closeInfoModal}
            >Close</button>
        </div>
        <div className="modal-overlay"></div>
        </>
    )
}