// Write all the code here
import React from "react";
import "../../styles/footer.scss";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

function Footer() {
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
        <h4>Follow us</h4>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillYoutube size={30} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram size={30} />
        </a>
        <a
          href="https://www.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={30} />
        </a>
      </aside>
    </footer>
  );
}

export default Footer;
