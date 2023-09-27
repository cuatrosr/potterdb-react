import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/slices/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(saveUser({ email: email, password: password }));
  };
  return (
    <div>
      <h1>Login</h1>
      Email:
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password:
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Log In</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Login;
