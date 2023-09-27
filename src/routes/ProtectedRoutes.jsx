import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth.value);
  if (!user) {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
