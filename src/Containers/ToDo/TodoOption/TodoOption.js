import React from 'react';
import RemoveOption from './RemoveOption.scss';

const Option = (props) => {
  return (
    <div className="BindingDivOne">
    <div className="RemoveOptionDiv">
      {props.optionText}
      <button
        className="RemoveOption"
        onClick={(event) => {props.removeSingleItem(props.optionText)}}>
        Remove
      </button>
      </div>
    </div>
  )
}

export default Option;