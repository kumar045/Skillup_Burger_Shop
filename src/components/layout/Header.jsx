import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";
const Header = ({ isAuthenticated = false }) => {
 return (
 <nav>
 <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
 <IoFastFoodOutline />
 </motion.div>
 <div>
 <Link to="/">Home</Link>
 <Link to="/contact">Contact</Link>
 <Link to="/about">About</Link>
 <Link to="/cart">
 <FiShoppingCart />
 </Link>
 {isAuthenticated ? (
 <DropdownMenu />
 ) : (
 <Link to="/login">
 <FiLogIn />
 </Link>
 )}
 </div>
 </nav>
 );
};
export default Header;