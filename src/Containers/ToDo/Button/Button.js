import React from 'react';
import IndecisionButtons from './Buttons.scss';

const Button = (props) => {
  return (
    <div>
      <button
        className="TodoButtonOne"
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What Should I do?
      </button>
      <button
        className="TodoButtonTwo"
        onClick={props.handleDelete}>
        Remove All
      </button>
    </div>
  );
}

export default Button;