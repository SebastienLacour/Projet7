import React, {useState} from "react";
import arrow from "../assets/arrow.png"

export default function Equipements(props) {
    const equipements = props.equipements
    console.log(equipements)

    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle)

    return(
        <div className="equipements">
            <div  className="equipements__title" onClick={toggleState}>
            <span>Équipements</span><img src={arrow} className={toggle ? "equipements__arrow__active" : "equipements__arrow"} />
            </div>
            <ul className={toggle ? "equipements__items__open" : "equipements__items"}>
            {equipements.map((item => (
                    <li>{item}</li>
            )))}
            </ul>
        </div>
    )
}