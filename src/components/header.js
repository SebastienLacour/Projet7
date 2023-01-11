// Importation du style css du header
import '../styles/header.css'

// Importation du logo
import logo from '../assets/LOGO.png'

// Importation du composant qui va gérer l'affichage de la barre de navigation
import Navbar from './navbar'
 
// Fonction de l'affichage du header
const Header = () => {
    return (
    <div className='header'>
        <img src={logo} alt='kasa' className='header__logo'/>
        <Navbar />
    </div>
    )
}

export default Header;