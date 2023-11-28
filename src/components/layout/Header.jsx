// Write all the code here
import React from "react";
import "../../styles/header.scss";
import HeaderIcon from "../../assets/bg.svg";

function Header(){
    return(
        <header>
            {/* <img src={HeaderLogo} alt="HeaderLogo" width="100" height="100"/> */}
            <nav>
                <div>
                    <a href="/">
                        <img src = {HeaderIcon} height={50} width={50}/>
                    </a>
                </div>
                <div>
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">About</a>
                    <a href="/">Cart</a>
                    <a href="/dropdownmenu">Menu</a>
                </div>
            </nav>     
        </header>
    );
}

export default Header;


