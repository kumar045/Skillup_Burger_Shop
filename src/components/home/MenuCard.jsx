import React from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>
        <Popup
          trigger={<button onClick={() => handler(itemNum)}>Buy Now</button>}
        >
          <div
            style={{
              color: "red",
              transform: "translate(0%,-500%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            Added to cart!
          </div>
        </Popup>
      </main>
    </motion.div>
  );
};

export default MenuCard;
