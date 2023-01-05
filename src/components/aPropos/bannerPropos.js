import React from "react";
import banner from "../assets/banner_propos.png";

export default function Banner() {
    return (
        <div className="banner">
            <img src={banner} alt='banner' className="banner__img" />
        </div>
    )
}