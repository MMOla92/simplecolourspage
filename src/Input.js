import React from "react";


const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label> Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add colour name"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Input;
