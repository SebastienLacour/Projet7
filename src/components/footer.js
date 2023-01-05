import React from "react";
import '../styles/footer.css'
import Logo from "../assets/LOGO_white.png" 

export default function Footer() {
    return(
        <footer className="footer">
            <img src={Logo} alt='logo' className="footer__logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}