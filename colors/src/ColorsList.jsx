import React from "react";

const ColorsList = ({ colors, addColor }) => (
  <>
    <h2>Colors</h2>
    <ol>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ol>
    <button onClick={() => addColor("green")}>Green</button>
    <button onClick={() => addColor("blue")}>Blue</button>
    <button onClick={() => addColor("violet")}>Violet</button>
  </>
);

export default ColorsList;
