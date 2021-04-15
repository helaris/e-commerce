import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ProductsPage from "./pages/Products/Products";
import ProductDetail from "./pages/Products/ProductDetail";
import CartPage from "./pages/Cart/Cart";

import "./App.css";
import Main from "./components/Main/Main";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  const cartCount = cart.length;
  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header cartCount={cartCount} />
            <Banner
              backgroundImage="https://bit.ly/3gb0hie"
              bannerHeader="Summer sale on it's way!"
              bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
              homePageBanner
            />

            <Main addToCart={addToCart} />
          </Route>
          <Route exact path="/products">
            <Header cartCount={cartCount} />
            <ProductsPage addToCart={addToCart} />
          </Route>
          <Route exact path="/cart">
            <Header cartCount={cartCount} />
            <CartPage
              cart={cart}
              cartCount={cartCount}
              amountOfItems={amountOfItems}
            />
          </Route>
          <Route exact path="/products/:id">
            <Header cartCount={cartCount} />
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
