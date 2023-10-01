import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Registrarse
      </Typography>
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
        <Grid container>
          <Grid item>
            <Link href="/login" variant="body2">
              {"Ya tienes una cuenta? Inicia Sesion"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUpForm;
