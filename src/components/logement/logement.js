// Importation de la fonction useParams permettant de récupérer l'id de l'url
import { useParams } from "react-router-dom";

// Importation du style pour la page logement
import "../../styles/logement.css"

// Importation de la flèche
import arrow from "../../assets/arrow.png"

// Importation des différents composants pour l'affichage de la page logement
import Tags from "./tag";
import Rate from "./rating";
import Description from "./description";
import Equipements from "./equipements";
import Header from "../header";
import Footer from "../footer";
import Slide from "./slide";

// Fonction qui va afficher la page de chaque logement
export default function Logement(props) {

    // On récupère les données passées en props dans la constante data
    const data = props.data

    // On récupère l'id de l'URL
    const { id } = useParams()

    // On récupère les données de l'apartement séléctionné en comparant son id avec l'id passée dans l'url
    const appart = data.find(el => el.id === id)

    // On récupère dans des constantes les différentes données nécéssaires pour l'affichage 
    const title = appart.title
    const location = appart.location
    const host = appart.host
    const name = host.name
    const hostPicture = host.picture

    return (
        <div>
            <Header />
            <div className="apartSection">
                <div className="apartPictures">
                    <Slide pictures={appart.pictures} />
                </div>
                <div className="appartPresentation">
                    <div className="appartFirstContent">
                        <div className="apartTitle">
                            <h1>{title}</h1>
                            <span>{location}</span>
                        </div>
                        <Tags tag={appart.tags} id={appart.id} />
                    </div>
                    <div className="appartSecondContent">
                        <div className="host">
                            <div className="hostName">{name}</div>
                            <img src={hostPicture} alt="host" className="hostPicture" />
                        </div>
                        <Rate rating={appart.rating} />
                    </div>

                </div>
                <div className="accordions">
                    <Description title="Description" description={appart.description} arrow={arrow} />
                    <Equipements title="Équipements" equipements={appart.equipments} arrow={arrow}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}