// Importation des fonctions useEffect, useRef, et useState pour l'accordéon
import {  useState } from "react";

// Importation du style css de l'accordéon
import "../../styles/accordion.css"

// Importation de la flèche pour l'accordéon
import arrow from "../../assets/arrow.png"

// Fonction d'affichage des accordéons avec comme props le titre et le paragraphe
export default function Accordion(props) {

    // On récupére les valeurs des props dans différents constantes
    const title = props.title
    const paragraph = props.paragraph

    // On créer un useState avec un booleen pour voir si l'utilisateur clique sur la flèche ou non, on l'initialise sur false
    const [toggle, setToggle] = useState(false)



    // On créer une fonction qui récupère le changement d'état au clic de la souris, il est donc différent de l'état initial
    const toggleState = () => {
        setToggle(!toggle)
    }

    // Fonction d'affichage des accordéons, la classe de la flèche et du paragraphe de chaque accordéon changera en fonction du state, changeant ainsi l'affichage
    // On modifie la classe grace à l'opérateur ternaire qui prend en condition le state 
    return (
        <div className="container">
            <div  className="container__item">
                <div className="container__title" onClick={toggleState} >
                    {title} 
                    <img src={arrow} alt="flèche" className={toggle ? "container__arrow__active" : "container__arrow"} />
                </div>
                
            </div>
            <div className={toggle ? "container__paragraph__open" : "container__paragraph"}>
             <p className="paragraph" > 
                    {paragraph}
            </p>

             </div> 
        </div>

    )
}