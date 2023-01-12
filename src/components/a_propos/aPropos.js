// Importation des différents composant qui va mettre en forme la page à propos
import Header from "../header";
import Banner from "../banner";
import Accordion  from "./accordion";
import Footer from "../footer";

// Importation de l'image de la bannière de la page "a propos"
import banner from "../../assets/banner_propos.png";

// fonction d'affichage de la page 'a propos', on place en props l'image à afficher pour la bannière, ainsi que le titre et le paragraphe pour chaque accordéon
export default function Apropos() {

    return(
        <div>
            <Header />
            <Banner image={banner}/>
            <div className="propos-content">
            <Accordion  title="Fiabilité" paragraph="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Accordion  title="Respect" paragraph="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Accordion  title="Service" paragraph="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Accordion  title="Responsabilité" paragraph="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
            </div>
            <Footer />
        </div>
    )
}