import { signInWithEmailAndPassword } from "firebase/auth";
import { saveUser } from "../redux/slices/authSlice";
import { auth } from "../configs/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Box, Button, TextField } from "@mui/material";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then(async (userCredential) => {
        const user = userCredential.user;
        dispatch(saveUser(user));
        navigate("/");
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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        InputLabelProps={{ shrink: true }}
        margin="normal"
        required
        fullWidth
        label="Correo Electronico"
        name="email"
        color="secondary"
        type="email"
        id="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        margin="normal"
        required
        fullWidth
        name="password"
        color="secondary"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        color="secondary"
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Iniciar Sesion
      </Button>
    </Box>
  );
}

export default LoginForm;
