import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <div className='nav-header'>
      <div className='logo'>Space X</div>
      <div className='main-nav'>
        <NavLink className='nav-link-title' exact to='/'>
          Home
        </NavLink>
        <NavLink className='nav-link-title' exact to='/favorites'>
          Favorites
        </NavLink>
        <NavLink className='nav-link-title' exact to='/upcoming-launches'>
          Upcoming Launches
        </NavLink>
        <NavLink className='nav-link-title' exact to='/spacex-history'>
          Space X History
        </NavLink>
        <NavLink className='nav-link-title' exact to='/launch-pads'>
          Launch Pads
        </NavLink>
      </div>
    </div>
  );
};
