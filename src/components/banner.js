// Importation du style css pour la bannière
import '../styles/banner.css'

// Fonction d'affichage de la bannière avec comme props l'image et le titre
const Banner = (props) => {

    // On récupère l'image et le titre à afficher dans la bannière
    const image = props.image
    const title = props.title

    // Fonction d'affichage de la bannière
    return (
        <div className='banner'>
            <img src={image} alt='banner' className='banner__img' />
            <div className='banner__title'>
                <h1>{title}</h1>
            </div>
        </div>
    )
};

export default Banner