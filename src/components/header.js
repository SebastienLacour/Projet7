import React from 'react'
import '../styles/header.css'
import logo from '../assets/LOGO.png'
import Navbar from './navbar'
 

const Header = () => {
    return (
    <div className='header'>
        <img src={logo} alt='kasa' className='header__logo'/>
        <Navbar />
    </div>
    )
}

export default Header;