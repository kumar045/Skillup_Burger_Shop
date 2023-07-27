import React from 'react';
// import { motion } from "framer-motion";
import me from '../../assets/skj.jpg';
const Founder = () => {
  return (
    <section className='founder'>
      <div>
        <img
          src={me}
          alt='Founder'
          height={200}
          width={200}
        />
        <h3>Elena</h3>

        <p>
          Hey, Everyone I am the founder of Burger Shop.
          <br />
          Our aim is to create the most tasty burger on planet.
        </p>
      </div>
    </section>
  );
};

export default Founder;
