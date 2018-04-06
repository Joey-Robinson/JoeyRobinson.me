import React from 'react';
import IndecisionHeader from './IndecisionHeader.scss';

const Header = (props) => {
  return (
    <div className="IndecisionHeader">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Header;
