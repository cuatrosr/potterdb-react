import { createBrowserRouter } from "react-router-dom";
import Register from "../components/register";
import Login from "../components/login";
import { Error, Root } from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
