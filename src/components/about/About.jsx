import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger Shop</h4>
          <p>This is Burger Shop. The place for the most delicious burgers in the whole world.</p>

          <p>Explore the various type of food and burgers. Click below to see the menu</p>

          <Link to='/'>
            <button className='main-red-button'>Explore Menu</button>
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;
