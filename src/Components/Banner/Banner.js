import React from 'react'
import Categories from '../Categories/Categories'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="selectContainer"> <Categories/></div>
            </div>
        </div>
    )
}

export default Banner
