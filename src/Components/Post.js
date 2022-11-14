import { useEffect, useState } from "react";

const Post = ({ title, body, userId }) => {
  const [Authors, setAuthors] = useState([]);
  const FetchUser = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    setAuthors(data);
  };

  useEffect(() => {
    FetchUser();
  }, []);

  return (
    <div className="flex items-center flex-col rounded-lg shadow-md justify-center gap-4 bg-slate-200 flex-1 p-2 min-w-300 h-400">
      <h4 className="text-center font-bold text-gray-900 text-2xl mb-4">
        {title}
      </h4>
      <p className="text-black font-xl ">{body}</p>

      <p className="text-lime-900 font-bold text-left self-start mt-4 font-xl italic">
        By: {Authors.map((author) => userId === author.id && author.name)}
      </p>
    </div>
  );
};

export default Post;
