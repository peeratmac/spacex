import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <div>
      <h1>Space X</h1>
      <NavLink exact to='/'>
        Home
      </NavLink>
      <NavLink exact to='/favorites'>
        Favorites
      </NavLink>
      <NavLink exact to='/upcoming-launches'>
        Upcoming Launches
      </NavLink>
      <NavLink exact to='/spacex-history'>
        Space X History
      </NavLink>
      <NavLink exact to='/launch-pads'>
        Launch Pads
      </NavLink>
    </div>
  );
};
