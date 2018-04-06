import React from 'react';
import Option from '../TodoOption/TodoOption';

const Options = (props) => {
  return (
    <div >
      {props.options.length === 0 && <p>Add an item</p>}
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