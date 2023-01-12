// Importation de useState pour modifier l'état de la flèche
import React, { useState } from "react";

// Fonction d'affichage de la description
export default function Description(props) {

    // On récupère la description passée en prop
    const description = props.description

    //On récupère la flèche passée en prop
    const arrow = props.arrow

    // On créer un useState qu'on initialise à false
    const [toggle, setToggle] = useState(false);

    // Fonction de modification du state qui inverse le state initiale (passer de false à true et vice versa)
    const toggleState = () => {
        setToggle(!toggle)
    }

    // On modifie la classe en fonction du state, ce qui modifiera l'affichage de l'accordéon
    return (
        <div className="description">
            <div className="description__header">
                <div className="description__title" onClick={toggleState}>
                    <span>Description</span>
                    <img src={arrow} alt='flèche' className={toggle ? "description__arrow__active" : "description__arrow"} />
                </div>
            </div>
            <p className={toggle ? "description__items__open" : "description__items"}>{description}</p>
        </div>
    )
}