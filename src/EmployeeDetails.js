/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiWebmoney } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { MdOutlineMapsHomeWork } from "react-icons/md";
const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);

  const FetchUser = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?id=${id}`
    );
    const data = await response.json();
    setEmployee(data);
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <>
      {employee.map((emp) => (
        <div
          key={emp.id}
          className="bg-green-500 text-white w-full h-full flex flex-col gap-2 p-4 items-center justify-around align-middle"
        >
          <img
            src={`https://joeschmoe.io/api/v1/${emp.name}`}
            width={300}
            height={300}
            alt={emp.name}
            className="p-1 mb-4  rounded-full"
          />
          <p className="text-sm font-bold italic">
            {emp.username.toLowerCase()}
          </p>
          <div className="w-full  p-4 flex flex-wrap items-center  justify-evenly align-middle text-left text-blue-800">
            <section className="mb-3">
              <h6 className="text-gray-800 font-extrabold text-center mb-1">
                Personal Details
              </h6>

              <h3 className="text-2xl font-bold">{emp.name}</h3>
              <p className="text-lg font-bold">{emp.email}</p>
              <p className="text-lg font-bold flex items-center gap-2">
                <AiFillPhone />
                {emp.phone}
              </p>
            </section>
            <section className="text-center ">
              <h6 className="text-gray-800 font-extrabold text-center mb-1">
                Company Details
              </h6>
              <h3 className="text-2xl font-bold flex items-center align-middle gap-2">
                {" "}
                <MdOutlineMapsHomeWork />
                {emp.company.name}
              </h3>
              <p className="text-lg font-bold italic mb-2">
                {emp.company.catchPhrase}
              </p>
              <p className="text-lg font-bold flex items-center gap-2 text-center">
                <SiWebmoney />
                {emp.website}
              </p>
            </section>
          </div>
        </div>
      ))}
    </>
  );
};

export default EmployeeDetails;
