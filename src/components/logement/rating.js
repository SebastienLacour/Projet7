// Importation des images étoiles pour notre système de notation
import stars from '../../assets/stars.png'
import coloredstar from '../../assets/colored_star.png'

// Fonction d'affichage des étoiles en fonction de la note de l'appartement
export default function Rate(props) {

    // On récupère la note passée en prop
    const rating = props.rating

    // On initialise un tableau contenant 5 éléments
    const starArray = [0, 0, 0, 0, 0]

    // On remplis d'abord le tableau d'étoile colorées jussqu'à la valeur de la note
    starArray.fill(coloredstar,0, rating)

    // On complète le tableau avec des étoiles non colorées
    starArray.fill(stars,rating)

    // On utilise la fonction map sur le tableau starArray pour afficher les étoiles 
    return(
        <div className="rating">
            {starArray.map(((star, index) => (
                    <img src={`${star}`} key={index} alt="star" className="star"/>
            )))}
        </div>
    )
}