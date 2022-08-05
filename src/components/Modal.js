import React from "react";
import { Modal, Box } from "@mui/material";

const FormModal = (props) => {
  const open = props.open;
  return (
    <>
      <Modal open={open} onClose={props.onClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {props.form}
        </Box>
      </Modal>
    </>
  );
};

export default FormModal;
