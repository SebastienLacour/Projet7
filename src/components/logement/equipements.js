// Importation de useState pour modifier l'état de la flèche
import React, { useState } from "react";

// Fonction d'affichage des equipements
export default function Equipements(props) {

    // On récupère le tableau équipements passée en prop
    const equipements = props.equipements

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
        <div className="equipements">
            <div className="equipements__title" onClick={toggleState}>
                <span>Équipements</span>
                <img src={arrow} alt='flèche' className={toggle ? "equipements__arrow__active" : "equipements__arrow"} />
            </div>
            <ul className={toggle ? "equipements__items__open" : "equipements__items"}>
                {equipements.map(((item, name) => (
                    <li key={name}>{item}</li>
                )))}
            </ul>
        </div>
    )
}