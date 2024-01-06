// Popup.tsx
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
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "visibility 0s, opacity 0.5s",
      }}
    >
      <Box
        className="popup-content"
        onClick={(e:any) => e.stopPropagation()}
        sx={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h2>Email Addresses</h2>
        <p>info@thesrluxuries.com</p>
        <p>support@thesrluxuries.com</p>
        <button onClick={onClose}> X </button>
      </Box>
    </Box>
  );
};

export default Popup;
