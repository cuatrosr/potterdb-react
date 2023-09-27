import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.auth.value);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return <RouterProvider router={router} />;
}

export default App;
