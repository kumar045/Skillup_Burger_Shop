import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

// This function builds the cart for each item
const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  // Initialize the Cart item Variables
  const cheeseBurgerState = useState(0);
  const vegCheeseBurgerState = useState(0);
  const cheeseBurgerFriesState = useState(0);

  // This function is used for incrementing the cart item
  const increment = (item) => {
    item[1](item[0] + 1);
  };
  // This function is used for decrementing the cart item
  const decrement = (item) => {
    if (item[0] > 0) {
      item[1](item[0] - 1);
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cheeseBurgerState[0]}
          increment={() => increment(cheeseBurgerState)}
          decrement={() => decrement(cheeseBurgerState)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={vegCheeseBurgerState[0]}
          increment={() => increment(vegCheeseBurgerState)}
          decrement={() => decrement(vegCheeseBurgerState)}
        />

        <CartItem
          title={"Cheese Burger With French Fries"}
          img={burger3}
          value={cheeseBurgerFriesState[0]}
          increment={() => increment(cheeseBurgerFriesState)}
          decrement={() => decrement(cheeseBurgerFriesState)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
