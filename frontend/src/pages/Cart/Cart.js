import React from "react";
// import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

const Cart = ({ cart, cartCount, amountOfItems }) => {
  // const filterDuplicates = cart.filter(
  //   (item, index) => cart.indexOf(item) === index
  // );

  const filterDuplicates = cart.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  return (
    <div>
      <section className="cart__text">
        <h1>Shopping Cart</h1>
        <p>{cartCount} items in your cart</p>
      </section>
      {}
      <table className="cart__table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filterDuplicates?.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.defaultImage} alt="Car" className="cart__img" />
              </td>
              <td>
                {item.name}
                <br /> Quantity: {amountOfItems(item.id)}
              </td>
              <td>${Math.ceil(item.price) * amountOfItems(item.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Total amount: ${Math.ceil(cartTotal)}</h1>
    </div>
  );
};

export default Cart;
