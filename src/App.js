import Header from "./Components/Header";
import Workers from "./Components/Workers";
import { Route, Routes } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import Newpost from "./Components/Newpost";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="bg-green-50 min-h-screen f-fit w-screen p-2 flex flex-col gap-1 justify-center align-middle items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Workers />} />
        <Route path={`/employee/:id`} element={<EmployeeDetails />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<Newpost />} />
        <Route
          path="*"
          element={
            <h1 className="flex text-center items-center justify-center font-bold text-5xl">
              404 Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
