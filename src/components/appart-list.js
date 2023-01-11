// Importation du style css de la lise d'appartements
import '../styles/appart-list.css';

// Importation de Link pour faire les liens vers chaque page'produit' de l'application
import { Link, } from "react-router-dom";

// Fonction d'affichage de la liste d'appartement avec pour props les données de l'api
const Appartlist = (props) => {

    // On récupère les données dans la constante data
    const data = props.data
    console.log("data", data)

    // On utilise la fonction map pour afficher la liste de tous les appartements, avec comme clé l'id de chaque appartement 
    return (
        <div className="appart-list">
            {data.map(item => (
                <Link to={"/logement/" + item.id} key={item.id} className="appart">
                    <img src={`${item.cover}`} alt="logement" className="appart__picture" />
                    <strong className="appart__title">{item.title}</strong>
                </Link>
            ))}
        </div>
    )
}

export default Appartlist