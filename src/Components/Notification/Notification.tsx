import React, { SyntheticEvent, Dispatch, SetStateAction } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";

const Alert = React.forwardRef(function Alert(
  props: any,
  ref: React.Ref<HTMLDivElement>
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface Props {
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  type: string;
}

const Notification: React.FC<Props> = ({ message, open, setOpen, type }) => {
  const handleClose = (
    event: Event | SyntheticEvent<Element, Event>,
    reason: any
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="notification">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert variant="standard" onClose={handleClose} severity={type}>
          <Typography variant="h5" align="center">
            {message}
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
