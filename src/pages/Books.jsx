import { CustomizedDialog, DetailedCard } from "../components";
import { Grid, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "../configs/axiosConfig";

function Books() {
  const [potions, setPotions] = useState([]);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const childToParent = (childData) => {
    setSelected(childData);
    setOpen(true);
  };
  const skeletonArray = [1, 2, 3, 4];
  const getPotions = async () => {
    try {
      const response = await axios.get("/v1/books");
      setPotions(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const renderPotions = () => {
    return potions.map((potion) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={potion.id}>
        <DetailedCard
          onSelected={childToParent}
          img={potion.attributes.cover}
          name={potion.attributes.title}
          id={potion.id}
          attributes={potion.attributes}
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
    getPotions();
  }, []);
  return (
    <Grid container spacing={2}>
      <CustomizedDialog
        attributes={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
      {potions.length !== 0 ? renderPotions() : renderSkeletons()}
    </Grid>
  );
}

export default Books;
