import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <div>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/favorites'>
        Favorites
      </NavLink>
    </div>
  );
};
