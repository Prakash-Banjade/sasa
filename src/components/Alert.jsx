import React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const AlertMessage = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <Collapse in={open}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ padding: 2 }}
        >
          This site is still under development. Some of the content and features might not work as expected!
        </Alert>
      </Collapse>
    </>
  );
};

export default AlertMessage;
