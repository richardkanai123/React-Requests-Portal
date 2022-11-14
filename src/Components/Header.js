import React from "react";
import { FaUsersCog } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { AiFillFileAdd } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full p-5 flex items-center justify-around gap-2 align-middle bg-green-500 text-white rounded-md">
      <section className="flex gap-3 font-bold hover:underline">
        <a className="flex items-center align-middle gap-1" href="/">
          <FaUsersCog className="font-bold text-2xl" /> Staff
        </a>
      </section>

      <section className="flex gap-3 font-bold ">
        <a
          className="hover:underline hover:text-indigo-800 flex items-center gap-1 "
          href="/posts"
        >
          <BsFileEarmarkPost />
          Requests
        </a>
        <a
          className="hover:underline hover:text-indigo-800 flex items-center gap-1 "
          href="/posts/new"
        >
          <AiFillFileAdd />
          New Request
        </a>
      </section>
    </div>
  );
};

export default Header;
