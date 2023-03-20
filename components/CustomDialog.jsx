import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Title(props) {
  const { children, setOpen, ...other } = props;

  return (
    <DialogTitle {...other}>
      <Typography pr={5}>{children}</Typography>
      {setOpen ? (
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CustomDialog = ({ title, children, open, setOpen, maxWidth = "md" }) => {
  return (
    <Dialog maxWidth={maxWidth} open={open} onClose={() => setOpen(false)}>
      <Title setOpen={setOpen}>{title}</Title>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
