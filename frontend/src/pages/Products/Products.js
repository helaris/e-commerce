import React, { useState, useEffect } from "react";
import backend from "../../api";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import "./Products.css";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const pageLimit = 12;
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await backend
        .get(`/products?q=${keyword}&_page=${page}&_limit=${pageLimit}`)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
      return request;
    }
    fetchData();
  }, [page, keyword]);

  const handleNextButton = () => {
    setPage(page + 1);
  };

  const handlePrevButton = () => {
    setPage(page - 1);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="products__container">
      <Banner
        backgroundImage="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        bannerHeader="Products for every taste"
        bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
      />

      <section className="search__field">
        <h2>Search for products</h2>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Keywords 'salad', 'fish' etc..."
        />
      </section>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            defaultImage={product.defaultImage}
            price={product.price}
            addToCart={addToCart}
            product={product}
          />
        ))}
      </div>
      <div className="product__pagination">
        <button
          className="btn"
          disabled={page === 1}
          onClick={handlePrevButton}
        >
          Prev
        </button>
        <button className="btn" onClick={handleNextButton}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
