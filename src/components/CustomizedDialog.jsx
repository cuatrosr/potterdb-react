import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CustomizedDialog(props) {
  const name = props.attributes
    ? props.attributes.name
      ? props.attributes.name
      : props.attributes.title
    : "";
  const keys = props.attributes ? Object.keys(props.attributes) : undefined;
  return (
    <>
      <BootstrapDialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {keys
            ? keys.map(
                (key) =>
                  props.attributes[key] !== null &&
                  key !== "image" && (
                    <Accordion key={key}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{key}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>{props.attributes[key]}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  )
              )
            : ""}
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}

CustomizedDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  attributes: PropTypes.object,
};

export default CustomizedDialog;
