import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import backend from '../../api';
import ProductCard from '../ProductsCard/ProductCard';

import './Main.css';

const Main = () => {
    const [recommended, setRecommended] = useState([]);
    // const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData() {
          const request = await backend.get("/recommendeds")
            .then(response => {
                setRecommended(response.data)
            })
            .catch(err => {
              console.log(err.message);
              // setError(true);
            })
          return request;
        }
        fetchData();
      }, []);

  return (
    <section className="main__container">
      <h1 className="main__container-header">Our bestsellers</h1>
      <div className="main__products">
        {recommended.map(product => (
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
      <Link to='/products'>See all products</Link>
    </section>
  )
}

export default Main
