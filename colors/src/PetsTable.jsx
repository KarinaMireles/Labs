import React from "react";

const PetsTable = ({ pets }) => (
  <>
    <h2>Pets</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default PetsTable;
