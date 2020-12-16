import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Footer.css'

const Footer = (props) => {

    const loginDemoUser = () => {
        props.submitLogin({
            email: "e@h.com",
            password: "1234"
        })
    }

    return (
        <footer className="footer">
            { props.currentUser ? 
            <>
                <button 
                className="log" 
                onClick={props.handleLogout}
                >Logout</button>
                <NavLink 
                className="log edit"
                to="/admin"
                >Edit Account</NavLink>
            </>
            :
            <button 
                className="log"
                onClick={loginDemoUser}
                
            >Admin</button>
        //  <NavLink 
        //  className="log"
        //  to="/login"
        //  >Admin</NavLink>
        }
        <p className="tombar">powered by Tombardier</p>
        </footer>
    )
}
export default Footer