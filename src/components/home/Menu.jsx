// Write all the code
import React from 'react';
import "../../styles/menu.scss";
import MenuCard from "../../components/home/MenuCard.jsx"; 
import burgerImage1 from "../../assets/burger1.png"
import burgerImage2 from "../../assets/burger2.png"
import burgerImage3 from "../../assets/burger3.png"

const Menu = () => {
  return (
    <div id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard itemnum={"card Image"} burgerSrc={burgerImage1} price={"200"} title={"CHEESE BURGER"} handler={1} />
        <MenuCard itemnum={"card Image"} burgerSrc={burgerImage2} price={"500"} title={" VEG CHEESE BURGER"} handler={2} />
        <MenuCard itemnum={"card Image"} burgerSrc={burgerImage3} price={"1800"} title={"CHEESE BURGER WITH FRENCH FRIES"} handler={3} />
      </div>
    </div>
  );
};

export default Menu;