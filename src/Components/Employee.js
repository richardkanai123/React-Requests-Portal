import React from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Employee = ({ Name, Email, altName, uid }) => {
  return (
    <Link
      to={`/employee/${uid}`}
      className="min-w-fit w-full md:w-350 bg-green-400 rounded-lg shadow-md flex flex-col items-center align-middle justify-around p-3 mb-4 hover:bg-green-500 hover:shadow-xl"
    >
      <img
        src={`https://joeschmoe.io/api/v1/${Name}`}
        width={300}
        height={300}
        alt={altName}
        className="p-1 mb-4"
      />
      <section>
        <h2 className="text-xl font-bold">{Name}</h2>
        <p className="text-gray-900 font-bold">{Email}</p>
        <button className="text-white bg-sky-500 rounded-lg font-bold my-2 p-2">
          More Details
        </button>
      </section>
    </Link>
  );
};

export default Employee;
