import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="Square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "black" : "#FFF",
      }}
    >
      <p> {colorValue ? colorValue : "Type a colour"} </p>
     {/*  <p>{hexValue ? hexValue : null} </p> */}
    </section>
  );
};

Square.defaultProps = {
  colorValue: "Empty Color Value",
};

export default Square;
