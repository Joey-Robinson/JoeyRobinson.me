import React from 'react';
// import WeightConverter from '../../Containers/Portfolio/WeightConverter/WeightConverter';
import Indecision from '../Portfolio/IndecisionApp/Indecision';
import { NavLink } from 'react-router-dom';

const Portfolio = () => (
  <div className="Portfolio">
    <h1>This is where my work is showcased</h1>
    <NavLink to="/portfolio/weights">Weights</NavLink>
    <NavLink to="/portfolio/indecision">Indecision</NavLink>
  </div>
)

export default Portfolio;