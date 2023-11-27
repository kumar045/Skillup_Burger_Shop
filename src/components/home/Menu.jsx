// Write all the code
import React from 'react';
import "../../styles/menu.scss"; 

const Menu = () => {
  return (
    <div id="menu">
      <h1>Menu</h1>
      <div>
        <div className="menuCard">
          <div>
            <h2>Card Title</h2>
          </div>
          <main>
            <img src="../../src/burger1.png" alt="Card Image" />
            <h5>Card Subtitle</h5>
            <p>Card Description</p>
            <button>Click me</button>
          </main>
        </div>
        <div className="menuCard">
          <div>
            <h2>Card Title</h2>
          </div>
          <main>
            <img src="../../src/burger2.png" alt="Card Image" />
            <h5>Card Subtitle</h5>
            <p>Card Description</p>
            <button>Click me</button>
          </main>
        </div>
        <div className="menuCard">
          <div>
            <h2>Card Title</h2>
          </div>
          <main>
            <img src="../../src/burger3.png" alt="Card Image" />
            <h5>Card Subtitle</h5>
            <p>Card Description</p>
            <button>Click me</button>
          </main>
        </div>
        
    
      </div>
    </div>
  );
};

export default Menu;