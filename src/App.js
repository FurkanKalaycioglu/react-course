import "./style/App.css";
import Button from "./components/button";
import Avatar from "./components/avatar";
import { useState, useEffect } from "react";
import PlayerCard from "./components/playercard";
import TodoItem from "./components/todoitem";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Profile from "./Profile";
import About from "./About";
import User from "./User";
import Home from "./Home";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },

    {
      path: "/user/:id",
      element: <User />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
