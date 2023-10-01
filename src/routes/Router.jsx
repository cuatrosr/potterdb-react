import { createBrowserRouter } from "react-router-dom";
import { Error, Login, Root, SignIn, Characters, Potions, Books } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "characters",
        element: <Characters />,
      },
      {
        path: "potions",
        element: <Potions />
      },
      {
        path: "books",
        element: <Books />
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

export default router;
