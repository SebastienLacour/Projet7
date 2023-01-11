import React, { useState } from "react";
import "../styles/slide.css"

export default function Slide({ slides }) {
    console.log(slides)


    let [index, setIndex] = useState(0);
    console.log(index)

    const goToPrevious = () => {
        const isFirstSide = index === 0;
        const newIndex = isFirstSide ? index = slides.length - 1 : index - 1;

        setIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSide = index === slides.length - 1
        const newIndex = isLastSide ? 0 : index + 1
        setIndex(newIndex)
    }
    return (
        <div className="content-image">
            {/* <span className="left-arrow" onClick={goToPrevious}>‹</span> */}
            <div className="image" style={{ backgroundImage: `url(${slides[index]})`, }}>
                <div className="arrow-content">
                    <span className="left-arrow" onClick={goToPrevious}>‹</span>
                    <span className="right-arrow" onClick={goToNext}>›</span>
                </div>
                <span className="indexers">{index + 1}/{slides.length}</span>
            </div>
            {/* <span className="right-arrow" onClick={goToNext}>›</span>
            <span className="indexers">{index + 1}/{slides.length }</span> */}
        </div>
    )
}