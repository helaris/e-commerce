import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";

const Cart = ({ cart, amountOfItems, setCart }) => {
  let ids = cart.map((o) => o.id);
  let filtered = cart.filter(({ id }, index) => !ids.includes(id, index + 1));

  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  return (
    <section>
      <Banner
        backgroundImage="https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        bannerHeader="Shopping Cart"
        shoppingCart
      />
      <div className="test">
        {cart.length === 0 ? (
          <section className="cart__empty">
            <h2>Your cart is currently empty</h2>
            <Link to="/products">Go Shopping</Link>
          </section>
        ) : (
          <div className="cart__items-container">
            <table className="cart__table">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody className="table__style">
                {filtered?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.defaultImage}
                        alt="Car"
                        className="cart__img"
                      />
                    </td>
                    <td>
                      {item.name}
                      <br /> Quantity: {amountOfItems(item.id)}
                    </td>
                    <td>${Math.ceil(item.price) * amountOfItems(item.id)}</td>
                    <td>
                      <button
                        className="cart__delete-btn"
                        onClick={() => removeFromCart(item)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="alignment">
              <div className="back__shopping">
                <Link to="/products">Back To Shopping</Link>
              </div>
              <p className="total">Total: ${Math.ceil(cartTotal)}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
