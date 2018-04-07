import React from 'react';
import Option from '../TodoOption/TodoOption';
import AddItem from './TodoOptions.css';

const Options = (props) => {
  return (
    <div>
      <div className="AddItem">
      {props.options.length === 0 && <p>Add an item</p>}
      </div>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          removeSingleItem={props.removeSingleItem}
          />
      ))}
    </div>
  );
}

export default Options;