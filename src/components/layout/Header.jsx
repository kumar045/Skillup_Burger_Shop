import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiLogIn } from 'react-icons/fi';
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav className='container'>
      <div>
        <Link to='/'>
          <IoFastFoodOutline />
        </Link>
      </div>

      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <Link to='/cart'>
          <FiShoppingCart />
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
