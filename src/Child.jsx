import React from "react";

const Child = ({ myName, myAge, fruits, students }) => {
  return (
    <div>
      <h2>Name: {myName}</h2>
      <p>Age: {myAge}</p>

      <h3>Fruits:</h3>
      {fruits.map((f, i) => (
        <p key={i}>{f}</p>
      ))}

      <h3>Students:</h3>
      {students.map((s, i) => (
        <p key={i}>
          {s.name} - {s.mark}
        </p>
      ))}
    </div>
  );
};

export default Child;
