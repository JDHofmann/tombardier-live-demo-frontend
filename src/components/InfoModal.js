import React from 'react'

export default class InfoModal extends React.Component{
    
    
    componentDidMount(){
        document.querySelector('.infoModalBtn').focus()
    }
    
    handleKeydown = (e) => {
        switch(e.keyCode){
            case 27:
                this.props.closeInfoModal()
            case 9:
                e.preventDefault()
            default: break
        }
    }
    
    render(){
        return(
    
            <>
            <div
                className="modal"
                role="dialog" 
                aria-labelledby="dialog-title" aria-describedby="dialog-description"
                onKeyDown={this.handleKeydown}
            >
                <div className="scrollable">

                    <h1>Welcome to Tombardier</h1>
                    <p>This site serves as a demo to test out the functionality of Tombardier.</p>
                    <p>The site functions as an active portfolio page. If you click the admin button in the bottom right hand corner of the page, you will be "logged in" as an administrator. Once you are an administrator you edit the site as it were your own</p>
                    {/* <p>If you enjoy using it, and would like to set up a portfolio site for yourself, visit <a href="#">Tombardier Github</a> to fork and clone the repo for yourself.</p> */}
                    <p>I hope you enjoy - JD</p>
                    <button 
                        className="infoModalBtn"
                        onClick={this.props.closeInfoModal}
                    >Close</button>
                </div>
            </div>
            <div  tabIndex="-1" className="modal-overlay"></div>
            </>
        )
    }
}