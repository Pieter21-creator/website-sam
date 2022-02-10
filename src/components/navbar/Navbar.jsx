import React, {useState} from 'react'
import './NavbarStyles.css'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import {FiInstagram, FiFacebook} from 'react-icons/gi'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    
    
    return(
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <h3>Sam</h3>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Nieuws</a></li>
                    <li><a href="/">Agenda</a></li>
                    <li><a href="/">Racedemo</a></li>
                    <li><a href="/">Foto</a></li>
                    <li><a href="/">Verslag</a></li>
                    <li><a href="/">Gastenboek</a></li>
                    <li><a href="/">Sem</a></li>

                    <div className="mobile-menu">
                        <button>Account</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaFacebook />
                            <FaInstagram />
                            </div>
                    </div>
                
                </ul>

                <ul className="nav-menu">
                    <li><a href="/"Shops></a></li>
                    <li><a href="/"Shops></a></li>
                    
                    </ul>
                
                <ul className="nav-menu">
                    <li><a href="/">Account</a></li>
                    <li><a href="/"></a></li>
                </ul>

        <div className="hamburger" onClick={handleNav}>
        {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
        </div>   
            </div>
</div>

        
        
    )
}

export default Navbar;