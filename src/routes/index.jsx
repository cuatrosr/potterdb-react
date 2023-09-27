import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import App from "../components/App";
import Login from "../components/login";
import Register from "../components/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/to",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
]);

export default router;
