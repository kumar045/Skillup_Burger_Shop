import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
<MenuCard
 itemNum={1}
 burgerSrc={burger1}
 price={200}
 title="Cheese Burger"
 handler={addToCartHandler}
 delay={0.1}
/>
import React, { useState, useEffect } from 'react';
import './MenuCard.css';

const MenuCard = ({ item, handleAddToCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [item.title]);

  const handleClick = () => {
    handleAddToCart(item);
  };

  return (
    <div className={`menu-card ${isAnimating ? 'animate-in' : ''}`}>
      <div className="image-container">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="content">
        <h3>{item.title}</h3>
        <p>₹{item.price}</p>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default MenuCard;

