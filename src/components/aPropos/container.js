import React, { useEffect, useRef, useState } from "react";
import "../styles/container.css"
import arrow from "../assets/arrow.png"

export default function Container(props) {
    const title = props.title
    const paragraph = props.paragraph

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState()

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight)
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle)
    return (
        <div className="container">
            <div  className="container__item">
                <div className="container__title" onClick={toggleState} >
                    {title} 
                    <img src={arrow} className={toggle ? "container__arrow__active" : "container__arrow"} />
                </div>
                
            </div>
            <div className={toggle ? "container__paragraph__open" : "container__paragraph"} style={{height: toggle ? `${heightEl}` : "0px"}} ref={refHeight}>
             <p className="paragraph" > 
                    {paragraph}
            </p>
             </div> 
        </div>

    )
}