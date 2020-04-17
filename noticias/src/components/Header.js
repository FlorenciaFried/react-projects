import React from "react";

const Header = ({ tittle }) => {
  return (
    <nav className="nav-wrapper">
      <a href="#!" className="brand-logo center">
        {tittle}
      </a>
    </nav>
  );
};

export default Header;
