import React, { useState } from "react";
import arrow from "../assets/arrow.png"

export default function Description(props) {
    const description = props.description

    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle)

    return (
        <div className="description">
            <div className="description__header">
                <div className="description__title" onClick={toggleState}>
                    <span>Description</span>
                    <img src={arrow} className={toggle ? "description__arrow__active" : "description__arrow"} />
                </div>
            </div>
            <p className={toggle ? "description__items__open" : "description__items"}>{description}</p>
        </div>
    )
}