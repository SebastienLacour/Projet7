import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <nav className='header__nav'>
            <Link className='header__nav-item' to="/">Accueil</Link>
            <Link className='header__nav-item' to="/a-propos">A Propos</Link>
        </nav>
    )
}