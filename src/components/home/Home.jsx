import React from 'react';
// import { motion } from 'framer-motion';
import Founder from './Founder';
import Menu from './Menu';

const Home = () => {
  return (
    <div className='container'>
      <section className='home'>
        <div>
          <h1>Burger Shop</h1>
          <p>Give yourself a tasty burger.</p>
        </div>

        <a className='main-red-button'>Explore Menu</a>
      </section>
      <Menu />

      {/* <Founder /> */}
    </div>
  );
};

export default Home;
