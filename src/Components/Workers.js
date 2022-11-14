import React, { useEffect, useState } from "react";
import Employee from "./Employee";

const Workers = () => {
  const [Employees, SetEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => SetEmployees(data));
  }, []);

  return (
    <div className="bg-green-100 flex flex-wrap gap-2 p-1 w-full h-fit items-center justify-around text-center">
      {Employees.map((employee) => (
        <Employee
          key={employee.id}
          uid={employee.id}
          Name={employee.name}
          Email={employee.email}
          altName={employee.name}
        />
      ))}
    </div>
  );
};

export default Workers;
