import { Link } from "react-router-dom";
import { SignUpForm, Copyright } from "../components";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const SignUp = () => {
  return (
    <Grid container component="div" sx={{ height: "100%" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images3.alphacoders.com/130/1308513.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
          <SignUpForm />
          <Grid container>
            <Grid item>
              <Link to="/login" variant="body2">
                {"Ya tienes una cuenta? Inicia Sesion"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
