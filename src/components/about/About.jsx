import React from "react";
import "../../styles/about.scss";
import founderImage from "../../assets/skj.jpg";
import { RiFindReplaceLine } from "react-icons/ri";

function About() {
  return (
    <div className="about">
      <main>
        <h1>ABOUT US</h1>
        <article>
          <h4>BURGER SHOP</h4>
          <p>
            This is Burger Shop. The place for most tasty burgers on the enitre
            earth.
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>
          <a href="/menu">
            <RiFindReplaceLine size={30} />
          </a>
        </article>
        <div>
          <h2>FOUNDER</h2>
          <article>
            <div>
              <img src={founderImage} alt="Profile" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God
              Taste...
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default About;
