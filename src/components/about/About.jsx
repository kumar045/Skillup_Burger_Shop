// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            This is your go-to Burger Shop. Finger licking Burgers and for you and the family.
          </p>
          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>J</h3>
            </div>
            <p>
              I am J, the founder of J's Burgers. No relations with Bob's Burgers. 
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};
export default About;
 
