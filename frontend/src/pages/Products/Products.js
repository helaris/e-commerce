import React, { useState, useEffect } from "react";
import backend from "../../api";
import ProductCard from "../../components/ProductsCard/ProductCard";
import Banner from "../../components/Banner/Banner";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const pageLimit = 12;
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await backend
  //       .get("/products")
  //       .then((response) => {
  //         setProducts(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //     return request;
  //   }
  //   fetchData();
  // }, []);
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
        backgroundImage="https://bit.ly/3uVwH4n"
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
          />
        ))}
      </div>
      <div className="product__pagination">
        <button disabled={page === 1} onClick={handlePrevButton}>
          Prev
        </button>
        <button onClick={handleNextButton}>Next</button>
      </div>
    </div>
  );
};

export default Products;
