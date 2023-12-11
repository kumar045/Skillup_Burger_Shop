// Write all the code here
import React from "react";
import "../../styles/header.scss";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";

import DropdownMenu from "./DropdownMenu";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <IoFastFoodOutline />
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/cart"><FiShoppingCart /></a>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}

export default Header;
