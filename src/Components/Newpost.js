import React, { useState } from "react";

const Newpost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      setTimeout(() => {
        setLoading(false);
        setTitle("");
        setBody("");
        setUserId("");
      }, 2000);
    });
  };

  return (
    <>
      <h3>Create New Request</h3>
      <form
        className="flex flex-col align-middle justify-center items-center bg-lime-700 rounded-lg gap-3 p-4 relative font-semibold"
        onSubmit={HandleSubmit}
      >
        <label className="inline text-teal-100" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          className="p-2 rounded-md w-300 outline-none border-gray-300 hover:border-lime-500 active:border-lime-600 hover:border-2 mb-2"
          name="title"
          id="title"
          placeholder="Enter menu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="inline text-teal-100" htmlFor="body">
          Body
        </label>
        <textarea
          className="w-300 rounded-md inline p-2"
          name="body"
          id="body"
          cols="30"
          rows="5"
          placeholder="Enter body here"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label className="block text-teal-200" htmlFor="UserId">
          User Id
        </label>
        <input
          className="p-2 rounded-md w-300 outline-none border-gray-300 hover:border-lime-500 active:border-lime-600 hover:border-2 mb-2"
          type="text"
          name="UserId"
          id="UserId"
          placeholder="Enter user id"
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit" className="bg-sky-400 p-4 text-teal-50 rounded">
          Submit
        </button>

        <p className="font-bold text-center text-white">
          {loading && "loading"}
        </p>
      </form>
    </>
  );
};

export default Newpost;
