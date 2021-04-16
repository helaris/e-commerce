import React from "react";
import { Link } from "react-router-dom";

import "./Banner.css";

const Banner = ({
  backgroundImage,
  bannerHeader,
  bannerParagraph,
  homePageBanner,
  shoppingCart,
}) => {
  return (
    <div
      className={`banner ${shoppingCart && "sc__height"}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(59, 39, 51, 0.473), rgba(133, 72, 107, 0.3)),url(${backgroundImage})`,
      }}
    >
      <div className="banner__content">
        <h1>{bannerHeader}</h1>
        <p>{bannerParagraph}</p>
        {homePageBanner && <Link to="/products">Check out our products</Link>}
      </div>
    </div>
  );
};

export default Banner;
