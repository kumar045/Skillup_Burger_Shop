import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer_container'>
          <div>
            <h2>Burger Shop</h2>

            <div className='footer_text'>
              <p>We are trying to give you the best taste possible.</p>
              <strong>All rights reserved by @burgershop &#9400; {new Date().getFullYear()}</strong>
            </div>
          </div>

          <aside>
            <h4>Follow Us</h4>
            <div className='aside-links'>
              <a href='./'>
                <AiFillYoutube />
              </a>
              <a href='./'>
                <AiFillInstagram />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
