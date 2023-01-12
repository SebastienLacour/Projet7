// Importation de useState pour le carousel d'images
import { useState } from "react";

// Importation du style pour le carousel d'image
import "../../styles/slide.css"

// Fonction pour l'affichage du carousel d'images
export default function Slide(props) {

    // On récupère les images passées en props
    const pictures = props.pictures

    // On crée un useState qu'on initialise à 0, il va représenter l'index de l'image dans le tableau, on initialise donc à l'index 0
    let [index, setIndex] = useState(0);

    // On créer une première fonction qui permettra à l'utilisateur de passer à l'image précédente
    const goToPrevious = () => {

        // On créer un constante qui récupère l'index 0
        const isFirstSide = index === 0;

        // On créer une condition:  si l'index vaut 0, on récupère l'index du dernier élément du tableau, sinon on passe à l'index précédent
        const newIndex = isFirstSide ? index = pictures.length - 1 : index - 1;

        // on réinitialise avec le nouvel index obtenu grâce à la fonction, nous permettant de reproduire le processus à chaque clique
        setIndex(newIndex)
    };

    // On créer une deuxième fonction qui permettra à l'utilisateur de passer à l'image suivante
    const goToNext = () => {

        // On créer une constante qui récupère le dernièr index du tableau
        const isLastSide = index === pictures.length - 1

        // On créer une condition, si l'index est celui du dernier élément du tableau, alors on retourne à l'index 0, sinon on passe l'index suivant
        const newIndex = isLastSide ? 0 : index + 1

        // on réinitialise avec le nouvel index obtenu grâce à la fonction, nous permettant de reproduire le processus à chaque clique
        setIndex(newIndex)
    }
    return (
        <div>
            <div className="content-image">
                <img src={pictures[index]} alt='images' className="image" />
            </div>
            <div className="arrow-content">
                <span className="arrow" onClick={goToPrevious}>‹</span>
                <span className="arrow" onClick={goToNext}>›</span>
            </div>
            <span className="indexers">{index + 1}/{pictures.length}</span>
        </div>
    )
}