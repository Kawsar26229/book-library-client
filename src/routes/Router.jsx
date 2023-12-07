import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AddBook from "../pages/AddBook/AddBook";
import Profile from "../pages/Profile/Profile";
import Update from "../pages/Update/Update";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch("http://localhost:3000/books"),
      },
      {
        path: "/add",
        element: <PrivateRoutes><AddBook></AddBook></PrivateRoutes>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>,
      },
      {
        path: "/update/:id",
        element: <PrivateRoutes>
            <Update></Update>
            </PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
