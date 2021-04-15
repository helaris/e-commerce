import React, { useState, useEffect } from "react";
import backend from "../../api";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState('');

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

  useEffect(() => {
    async function fetchData() {
      const request = await backend
        .get(`/products?q=${keyword}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return request;
    }
    fetchData();
  }, [keyword]);

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <div className="products__container">
      <Banner
        backgroundImage="https://bit.ly/3uVwH4n"
        bannerHeader="Products for every taste"
        bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
      />
      <form>
        <input onChange={handleChange} type="text" placeholder="Search for keywords..."/>
      </form>
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
