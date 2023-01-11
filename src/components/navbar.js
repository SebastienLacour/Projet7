// Importation de react
import React from 'react'

// Importation de Link, nous permettant de faire des liens vers les autres pages de l'application
import { Link } from 'react-router-dom'

// Fonction de l'affichage de la barre de navigation, avec les liens vers la page d'accueil pour le premier, et vers la page "a propos" pour le second
export default function Navbar() {
    return(
        <nav className='header__nav'>
            <Link className='header__nav-item' to="/">Accueil</Link>
            <Link className='header__nav-item' to="/a-propos">A Propos</Link>
        </nav>
    )
}