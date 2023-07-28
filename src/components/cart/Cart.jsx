import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className='cartItem'>
    <div>
      <h4>{title}</h4>
      <img
        src={img}
        alt='Item'
      />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input
        type='number'
        readOnly
        value={value}
      />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [amounts, setAmounts] = useState({});

  const increment = (id) => {
    setAmounts({
      ...amounts,
      [id]: (amounts[id] || 0) + 1,
    });
  };

  const decrement = (id) => {
    if (amounts[id] > 0) {
      setAmounts({
        ...amounts,
        [id]: amounts[id] - 1,
      });
    }
  };

  return (
    <section className='cart'>
      <main>
        <CartItem
          id={1}
          title={'Cheese Burger'}
          img={burger1}
          value={amounts[1] || 0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          id={2}
          title={'Veg Cheese Burger'}
          img={burger2}
          value={amounts[2] || 0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          id={3}
          title={'Cheese Burger with French Fries'}
          img={burger3}
          value={amounts[3] || 0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>{2000}SEK</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>{2000 * 0.18}SEK</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>{200}SEK</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>{2000 + 2000 * 0.18 + 200}SEK</p>
          </div>
          <Link to='/shipping'>Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
