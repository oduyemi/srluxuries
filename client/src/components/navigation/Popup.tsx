import React from "react";
import { Box } from "@mui/material";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  return (
    <Box
      className={`popup ${isOpen ? "open" : ""}`}
      onClick={onClose}
    >
      <h2>Email Addresses</h2>
      <p>info@thesrluxuries.com</p>
      <p>support@thesrluxuries.com</p>
      <button onClick={onClose}> X </button>
    </Box>
  );
};

export default Popup;
