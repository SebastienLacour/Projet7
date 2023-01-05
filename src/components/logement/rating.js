import React from "react";
import stars from '../assets/stars.png'
import coloredstar from '../assets/colored_star.png'

export default function Rate(props) {
    const rating = props.rating
    const starArray = [0, 0, 0, 0, 0]
    starArray.fill(coloredstar,0, rating)
    starArray.fill(stars,rating)
    console.log("rating",rating)
    console.log("starArray", starArray)

    return(
        <div className="rating">
            {starArray.map((star => (
                    <img src={`${star}`} alt="star" className="star"/>
            )))}
        </div>
    )
}