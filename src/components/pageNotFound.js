import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import "../styles/pageNotFound.css"

function NotFound() {
    return (
        <div>
            <Header />
            <div className="error__main">
            <h1 className="error__title">404</h1>
            <h2 className="error__message">Oups! La page que vous demandez n'existe pas.</h2>
            <Link className="error__link" to="/">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;