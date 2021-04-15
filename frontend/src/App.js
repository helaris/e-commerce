import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import ProductsPage from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import CartPage from './pages/Cart/Cart';

import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner 
            backgroundImage="https://bit.ly/3gb0hie"
            bannerHeader="Summer sale on it's way!"
            bannerParagraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi facilis ex nam possimus!"
            homePageBanner
            />
            <Main />
          </Route>
          <Route exact path="/products">
            <Header />
            <ProductsPage />
          </Route>
          <Route exact path="/cart">
            <Header />
            <CartPage />
          </Route>
          <Route exact path='/products/:id'>
            <Header />
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
