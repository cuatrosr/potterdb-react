import { Box, Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignUpForm() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createUserWithEmailAndPassword(
      auth,
      data.get("email"),
      data.get("password")
    )
      .then(async (userCredential) => {
        const user = userCredential.user;
        let timerInterval;
        await Swal.fire({
          icon: "success",
          title: "Listo",
          text: `Usuario ${user.email} creado`,
          timer: 2000,
          timerProgressBar: true,
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
        navigate("/login");
      })
      .catch(async () => {
        let timerInterval;
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No se pudo registrar",
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
        Registrar
      </Button>
    </Box>
  );
}

export default SignUpForm;
