import React, { useState, useEffect } from "react";
import backend from "../../api";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await backend
        .get("/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="products__container">
      {/* <h1>This is products page</h1> */}
      <Banner
        backgroundImage="https://bit.ly/3uVwH4n"
        bannerHeader="Products for every taste"
        bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
      />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          defaultImage={product.defaultImage}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
