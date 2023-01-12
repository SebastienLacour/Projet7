// Importation des composant header et footer pour la page d'erreur
import Header from "./header";
import Footer from "./footer";

// Importation de link pour créer le lien vers la page d'accueil
import { Link } from "react-router-dom";

//Importation du style css de la page d'erreur
import "../styles/pageNotFound.css"

export default function NotFound() {
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
