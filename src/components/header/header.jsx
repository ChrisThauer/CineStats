import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="logo">
      CineStats
    </h1>
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">Movies</li>
        <li className="nav-link login">Log In</li>
      </ul>
    </nav>
  </div>
);

export default Header;