import React from "react";
import Header from "../header";
import Footer from "../footer";
import appartList from "../apparts";
import Slide from "./slide";
import "../styles/logement.css"
import { useParams } from "react-router-dom";
import Tags from "./tag";
import Rate from "./rating";
import Description from "./description";
import Equipements from "./equipements";


export default function Logement() {
    const { id } = useParams()
    console.log(id)
    const appart = appartList.find(el => el.id === id)
    console.log(appart)
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
                <div className="menuBurger">
                    <Description description={appart.description} />
                    <Equipements equipements={appart.equipments} />
                </div>
            </div>
            <Footer />
        </div>
    )
}