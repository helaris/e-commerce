import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backend from "../../api";

import "./ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const request = await backend
        .get(`/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return request;
    }
    fetchData();
  }, [id]);

  return (
    <div className="product__container">
      <img
        className="product_image"
        src={product.defaultImage}
        alt={product.name}
      />
      <section className="product__details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <span>${Math.ceil(product.price)}</span>
        <button onClick={() => addToCart(product)} className="btn btn__align">
          Add to cart
        </button>
      </section>
    </div>
  );
};

export default ProductDetail;
