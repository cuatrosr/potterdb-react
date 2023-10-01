import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import PropTypes from "prop-types";

function Characters(props) {
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
            size="small"
            color="secondary"
          >
            Change Image
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
