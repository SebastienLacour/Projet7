import React from 'react'
import '../styles/banner.css'
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt='banner' className='banner__img' />
            <div className='banner__title'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
};

export default Banner