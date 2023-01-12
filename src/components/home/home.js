// Importation des différents composant qui va mettre en forme la page d'accueil
import Header from '../header'
import Banner from '../banner'
import Appartlist from './appart-list'
import Footer from '../footer'

//Importation de l'image de la bannière pour la page d'accueil
import banner from '../../assets/banner.png'

//On place en paramètre la valeur placer en props dans l'élement parent 
const Home = (props) => {

    // Récupération de la valeur passé en props dans la constante data
    const data = props.data

    // Affichage des différents composant dans la page d'accueil, on place la constante data en props du composant AppartList
    return (
        <div>
            <Header />
            <Banner image={banner} title='Chez vous, partout et ailleurs'/>
            <Appartlist data= {data}/>
            <Footer />
        </div>
    )
}

export default Home