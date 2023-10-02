import { CharacterCard, CustomizedDialog } from "../components";
import { useState, useEffect } from "react";
import axios from "../configs/axiosConfig";
import { Grid, Skeleton } from "@mui/material";
import { getDownloadURL, getMetadata, ref } from "firebase/storage";
import { storage } from "../configs/firebaseConfig";

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
    return characters.map((character) => {
      getImgofCharacter(character);
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
          <CharacterCard
            onSelected={childToParent}
            img={character.attributes.image}
            id={character.id}
            attributes={character.attributes}
          />
        </Grid>
      );
    });
  };
  const getImgofCharacter = async (character) => {
    try {
      const storageRef = ref(storage, character.id + ".png");
      const metadata = await getMetadata(storageRef);
      if (metadata) {
        const url = await getDownloadURL(storageRef);
        if (url !== null) character.attributes.image = url;
      }
    } catch (e) {
      console.error(e);
    }
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
