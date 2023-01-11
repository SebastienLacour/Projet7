// Importation de la fonction useParams permettant de récupérer l'id de l'url
import { useParams } from "react-router-dom";

// Importation du style pour la page logement
import "../styles/logement.css"

// Importation des différents composants pour l'affichage de la page logement
import Tags from "./tag";
import Rate from "./rating";
import Description from "./description";
import Equipements from "./equipements";
import Header from "./header";
import Footer from "./footer";
import Slide from "./slide";


export default function Logement(props) {
    const data = props.data
  
    console.log("data",data)
    const { id } = useParams()
    console.log(id)
    const appart = data.find(el => el.id === id)
    console.log(appart)
    console.log(appart.title)
    const title = appart.title
    const pictures = appart.pictures
    const location = appart.location
    console.log(pictures)
    const host = appart.host
    const name = host.name
    const hostPicture = host.picture
    return (
        <div>
            <Header />
            <div className="apartSection">
                <div className="apartPictures"><Slide slides={pictures} /></div>
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
                        </div>                        <Rate rating={appart.rating} />
                    </div>

                </div>
                <div className="accordions">
                    <Description title="Description" description={appart.description} />
                    <Equipements title="Équipements" equipements={appart.equipments} />
                </div>
            </div>
            <Footer />
        </div>
    )
}