// Write all the code here
import React from "react";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <div>
        <h1>burger shop</h1>
        <p>Give yourself a tasty burger.</p>
      </div>
      <a href="/menu">Explore menu</a>
    </div>
  );
}

export default Home;
