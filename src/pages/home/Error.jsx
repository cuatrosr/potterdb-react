import { Grid } from "@mui/material";
import NotFound from "../../components/root/NotFound";

const error = () => {
  return (
    <Grid
      container
      display="flex"
      direction="column"
      minHeight="100vh"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
    >
      <NotFound />
    </Grid>
  );
};

export default error;
