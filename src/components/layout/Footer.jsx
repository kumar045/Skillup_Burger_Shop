import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @burgershop</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/xyz">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/xyz">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
