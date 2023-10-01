import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { storage } from "../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function Characters(props) {
  const changeImage = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const storageRef = ref(storage, props.id + ".png");
          uploadBytes(storageRef, file).then((snap) => {
            getDownloadURL(snap.ref).then((url) => console.log(url));
          });
          Swal.fire({
            title: "Your uploaded picture",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture",
          });
        } catch (error) {
          console.error(error);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Card
        raised
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: 345,
          height: "16.5em",
        }}
      >
        <CardActionArea onClick={() => props.onSelected(props.attributes)}>
          {props.img ? (
            <CardMedia
              component="img"
              height="140"
              image={props.img}
              sx={{ objectFit: "fill" }}
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="src/assets/insert-image.svg"
              sx={{ objectFit: "fill" }}
            />
          )}
          <CardHeader
            title={props.attributes.name}
            titleTypographyProps={{ variant: "subtitle2", textAlign: "center" }}
          />
        </CardActionArea>
        <CardActions>
          <Button
            startIcon={<UploadIcon />}
            variant="contained"
            onClick={changeImage}
            size="small"
            color="secondary"
          >
            Agregar Imagen
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

Characters.propTypes = {
  attributes: PropTypes.object,
  img: PropTypes.string,
  id: PropTypes.string,
  onSelected: PropTypes.func,
};

export default Characters;
