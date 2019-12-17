import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div>
      <NavLink exact to="/">
        FD
      </NavLink>
    </div>
    <div>
      <button type="button">Sign Up</button>
      <button type="button">Sign In</button>
    </div>
  </header>
);

export default Header;
