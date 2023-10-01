import { Box, Grid, SvgIcon, Tab, Tabs, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/root";
import Logo from "../assets/harry-potter-heart.svg?react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root() {
  const [value, setValue] = useState("characters");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    navigate(value)
  }, [navigate, value]);
  return (
    <Grid component="div">
      <NavBar />
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        p={1}
      >
        <Box width="100%">
          <Typography
            variant="h4"
            component="h2"
            color="#000"
            sx={{
              m: 1,
              fontWeight: "500",
            }}
          >
            ¡Harry Potter Wiki!
          </Typography>
        </Box>

        <Grid
          container
          wrap="nowrap"
          display="flex"
          direction="row"
          alignItems="center"
          alignContent="center"
          justifyContent="flex-start"
        >
          <Grid
            container
            wrap="nowrap"
            display="flex"
            maxWidth="sm"
            direction="column"
            alignItems="flex-start"
            alignContent="center"
            justifyContent="center"
          >
            <Typography
              align="justify"
              variant="body1"
              component="p"
              color="#000"
              sx={{
                m: 1,
                fontWeight: "400",
              }}
            >
              Explora el mágico mundo de Harry Potter en nuestra página web
              informativa. Descubre los personajes icónicos, las intrigantes
              pociones y los emocionantes libros que han cautivado a millones de
              fanáticos en todo el mundo. ¡Sumérgete en la magia y la aventura
              de esta saga legendaria!
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value="characters" label="Personajes" />
                <Tab value="potions" label="Pociones" />
                <Tab value="books" label="Libros" />
              </Tabs>
            </Box>
          </Grid>
          <Box
            display="flex"
            fontSize="12em"
            width="2em"
            justifyContent="center"
          >
            <SvgIcon component={Logo} inheritViewBox fontSize="12em" />
          </Box>
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  );
}

export default Root;
