import React from 'react'

export const InfoModal = () => {
    return(
        <>
        <div
            className="modal"
            role="dialog" 
            aria-labelledby="dialog-title" aria-describedby="dialog-description"
        >
            <h1>Welcome to Tombardier</h1>
        </div>
        <div className="modal-overlay"></div>
        </>
    )
}