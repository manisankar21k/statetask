import React from "react";
import Child from "./Child";

const Parent = () => {

  const myName = "Manisankar";        // string
  const myAge = 23;                   // number
  const fruits = ["Apple", "Mango"];  // array

  const students = [                  // array of objects
    { name: "Ajay", mark: 90 },
    { name: "Kumar", mark: 85 }
  ];

  return (
    <div>
      <Child
        myName={myName}
        myAge={myAge}
        fruits={fruits}
        students={students}
      />
    </div>
  );
};

export default Parent;
