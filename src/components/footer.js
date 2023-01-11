// Importation du style css du footer
import '../styles/footer.css'

// Importation du logo en blanc pour le footer
import Logo from "../assets/LOGO_white.png" 

// Fonction d'affichage du footer
export default function Footer() {
    return(
        <footer className="footer">
            <img src={Logo} alt='logo' className="footer__logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}