import React from 'react';

const userInput = (props) => {
  const style = {
    margin: 'auto',
    width: '50%',
    border: '3px solid green',
    padding: '10px',
    display: 'block'
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.inputChanged}
      value={props.value}/>
  )
};

export default userInput;
