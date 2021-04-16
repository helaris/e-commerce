import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ProductsPage from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/Cart";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
    console.log(cart);
  };
  const cartCount = cart.length;
  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  useEffect(() => {
    const data = localStorage.getItem("cart");

    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <div className="App">
      <Router>
        <Header cartCount={cartCount} />
        <Switch>
          <Route exact path="/">
            <Banner
              backgroundImage="https://images.unsplash.com/photo-1607083205410-7e6835ffd235?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              bannerHeader="Summer sale on it's way!"
              bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
              homePageBanner
            />

            <Main addToCart={addToCart} />
          </Route>
          <Route exact path="/products">
            <ProductsPage addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <CartPage
              cart={cart}
              amountOfItems={amountOfItems}
              setCart={setCart}
            />
          </Route>
          <Route exact path="/products/:id" component={ProductDetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
