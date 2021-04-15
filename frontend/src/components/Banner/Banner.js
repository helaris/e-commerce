import React from 'react'
import { Link } from 'react-router-dom';
// import backend from '../../api';
import bannerImg from '../../images/banner.jpg';

import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__content">
                <h1>Looking for something specific?</h1>
                <Link to="/products">Check out our products</Link>
            </div>
        </div>
    )
}

export default Banner
