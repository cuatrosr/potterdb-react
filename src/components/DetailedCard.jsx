import { Card, CardActionArea, CardHeader, CardMedia } from "@mui/material";
import PropTypes from "prop-types";

function DetailedCard(props) {
  return (
    <>
      <Card
        raised
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: 345,
          height: "13em",
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
            title={props.name}
            titleTypographyProps={{ variant: "subtitle2", textAlign: "center" }}
          />
        </CardActionArea>
      </Card>
    </>
  );
}

DetailedCard.propTypes = {
  attributes: PropTypes.object,
  img: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onSelected: PropTypes.func,
};

export default DetailedCard;
