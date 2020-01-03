import React from 'react';

import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <h1 className="logo">
      CineStats
    </h1>
    <nav className="nav">
      <ul className="nav-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/movies">Movies</Link>
        <li className="nav-link login">Log In</li>
      </ul>
    </nav>
  </div>
);

export default Header;