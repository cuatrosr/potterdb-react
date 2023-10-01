import { SignUpForm, Copyright } from "../components";
import { Grid, Paper } from "@mui/material";

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
        <SignUpForm />
        <Copyright sx={{ mt: 5 }} />
      </Grid>
    </Grid>
  );
};

export default SignUp;
