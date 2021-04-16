import React, { useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, amountOfItems, setCart }) => {
  let ids = cart.map((o) => o.id);
  let filtered = cart.filter(({ id }, index) => !ids.includes(id, index + 1));

  console.log("oooooweeee", filtered);
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
  // console.log("filtered", filterDuplicates);

  return (
    <div className="cart__container">
      <section className="cart__text">
        <h1>Shopping Cart</h1>
        {/* <p>{cartCount} items in your cart</p> */}
      </section>
      {cart.length === 0 ? (
        <h2 className="no__cart-items">Your cart is currently empty</h2>
      ) : (
        <>
          <table className="cart__table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
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
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1>Total amount: ${Math.ceil(cartTotal)}</h1>
        </>
      )}
    </div>
  );
};

export default Cart;
