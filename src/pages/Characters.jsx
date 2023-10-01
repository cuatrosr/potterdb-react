import Character from "../components/Character";
import { useState, useEffect } from "react";
import axios from "../configs/axiosConfig";
import { Grid, Skeleton } from "@mui/material";
import CustomizedDialog from "../components/Dialog";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const childToParent = (childData) => {
    setSelected(childData);
    setOpen(true);
  };
  const skeletonArray = [1, 2, 3, 4];
  const getPersons = async () => {
    try {
      const response = await axios.get("/v1/characters");
      setCharacters(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const renderCharacters = () => {
    return characters.map((character) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
        <Character
          onSelected={childToParent}
          img={character.attributes.image}
          id={character.id}
          attributes={character.attributes}
        />
      </Grid>
    ));
  };
  const renderSkeletons = () => {
    return skeletonArray.map((skeleton) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={skeleton}>
        <Skeleton
          variant="rectangular"
          maxwidth={345}
          sx={{ height: "20em" }}
        />
      </Grid>
    ));
  };
  useEffect(() => {
    getPersons();
  }, []);
  return (
    <Grid container spacing={2}>
      <CustomizedDialog
        attributes={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
      {characters.length !== 0 ? renderCharacters() : renderSkeletons()}
    </Grid>
  );
}

export default Characters;
