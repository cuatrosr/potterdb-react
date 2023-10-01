import { signInWithEmailAndPassword } from "firebase/auth";
import { saveUser } from "../redux/slices/authSlice";
import { auth } from "../configs/firebaseConfig";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(saveUser(user));
      })
      .catch(async () => {
        let timerInterval;
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Acceso denegado",
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      });
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
    </div>
  );
};

export default Login;
