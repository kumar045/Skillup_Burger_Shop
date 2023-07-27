// Write all the code here
import React from 'react';
// import { motion } from 'framer-motion';
import Founder from './Founder';
import Menu from './Menu';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </div>

        <a>Explore Menu</a>
      </section>
      <Menu />

      {/* <Founder /> */}
    </>
  );
};

export default Home;
