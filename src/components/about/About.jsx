import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri"; 
import me from "../../assets/rashed.png";
const About = () => { 
  return (
<section className="about"> 
<main>
<h1>About Us</h1>
<article>
<h4>Burger Shop</h4> 
<p>
This is a Burger Shop. The place for the most tasty burgers on the
enitre earth. </p>
<p>
Explore the various types of foods and burgers. Click below to see the menu
</p>
<Link to="/"> 
<RiFindReplaceLine />
</Link> 
</article>
<div> 
  <h2>Founder</h2> 
  <article>
<div>
<img src={me} alt="image of Rashed Rokon, the founder" /> 
<h3>Rashed Rokon</h3>
</div>
<p>
Hi, I am Rashed Rokon, the founder of the Burger Shop. Affiliated to God Taste...
</p> 
</article>
</div> 
</main>
</section> 
);
};
export default About;
