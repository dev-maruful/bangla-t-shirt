import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please add some products</p>;
  } else {
    message = <p>Thanks for adding</p>;
  }

  return (
    <div>
      <h3>under cart : {cart.length}</h3>
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}{" "}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>
            Remove
          </button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
