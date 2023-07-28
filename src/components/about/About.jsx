import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='about'>
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger Shop</h4>
          <p>This is Burger Shop. The place for most tasty burgers on the enitre earth.</p>

          <p>Explore the various type of food and burgers. Click below to see the menu</p>

          <Link to='/'>
            <a
              href='#'
              className='main-red-button'
            >
              Explore Menu
            </a>
          </Link>
        </article>
      </main>
    </section>
  );
};

export default About;
