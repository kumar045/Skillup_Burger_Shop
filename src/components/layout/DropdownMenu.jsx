import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svg/fast-food-outline-svgrepo-com.svg"

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      {name:"Orders", path:"/myorders"},
      {name:"Logout", path:"/login"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div>
            <img src={LogoSvg} alt="Burger and cup" width={"30px"}/>
        </div>
        <div className="container">
          <a className="navbar-brand" href="#">
          
          </a>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button class="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;