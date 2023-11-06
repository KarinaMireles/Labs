import React, { useState } from "react";
import ColorsList from "./ColorsList";
import PetsTable from "./PetsTable";
const ArraysEx = () => {
  const [colors, setColors] = useState(["red", "orange", "yellow"]);
  const [pets, setPets] = useState([
    { name: "Whiskers", type: "cat", id: 1 },
    { name: "Fido", type: "dog", id: 2 },
    { name: "Tweety", type: "bird", id: 3 },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div>
      <ColorsList colors={colors} addColor={addColor} />
      <PetsTable pets={pets} />
    </div>
  );
};

export default ArraysEx;
