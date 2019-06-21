import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <nav id="navbar">
             <div className="container"> 
                <h1 className="logo fas fa-address-book">Contacts</h1>
                <ul>
                    <li><Link className="current" to="/">Home</Link></li>
                    <li><Link to="/make_contact">Make Contact</Link></li>
                    <li><Link to="/view_contacts">View Contacts</Link></li>
                </ul>
            </div>
            </nav>
        </header>
    )
}

export default Navbar


