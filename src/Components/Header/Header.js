import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <NavLink exact activeStyle={{color: '#464b6a', background: '#ebe7e7'}} to="/">Home</NavLink>
      <NavLink activeStyle={{color: '#464b6a', background: '#ebe7e7'}}  to="/about">About</NavLink>
      <NavLink activeStyle={{color: '#464b6a', background: '#ebe7e7'}}  to="/portfolio">Portfolio</NavLink>
      <NavLink activeStyle={{color: '#464b6a', background: '#ebe7e7'}}  to="/contact">Contact</NavLink>
    </div>
  );
};

export default Header;