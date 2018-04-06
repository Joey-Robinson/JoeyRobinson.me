import React from 'react';
import RemoveOption from './RemoveOption.scss';

const Option = (props) => {
  return (
    <div className="RemoveOptionDiv">
      {props.optionText}
      <button
        className="RemoveOption"
        onClick={(event) => {props.removeSingleItem(props.optionText)}}>
        Remove
      </button>
    </div>
  )
}

export default Option;