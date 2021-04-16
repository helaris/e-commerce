import React from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";

const ProductCard = ({
  id,
  name,
  description,
  defaultImage,
  price,
  product,
  addToCart,
}) => {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <article className="card">
      <div className="card__image">
        <img src={defaultImage} alt={name} />
      </div>
      <section className="card__header">
        <h1>{name}</h1>
      </section>
      <div className="card__body">
        <p>{truncate(description, 60)}</p>
        <p>${Math.ceil(price)}</p>
      </div>
      <footer>
        <div className="card__actions">
          <Link className="btn" to={`/products/${id}`}>
            View Details
          </Link>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to cart
          </button>
        </div>
      </footer>
    </article>
  );
};

export default ProductCard;
