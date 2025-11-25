import React from "react";

const Child = ({ myName, myAge, fruits, students }) => {
  return (
    <div>
      <h2>Name: {myName}</h2>
      <p>Age: {myAge}</p>

      <h3>Fruits:</h3>
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}

      <h3>Students:</h3>
      {students.map((stu, index) => (
        <p key={index}>
          {stu.name} - {stu.mark}
        </p>
      ))}
    </div>
  );
};

const App = () => {

  const myName = "Manisankar";          
  const myAge = 23;                     
  const fruits = ["Apple", "Mango"];    
  const students = [                    
    { name: "Ajay", mark: 90 },
    { name: "Kumar", mark: 85 }
  ];

  return (
    <div>
      <h1>Props Example</h1>

      <Child 
        myName={myName}
        myAge={myAge}
        fruits={fruits}
        students={students}
      />
    </div>
  );
};

export default App;
