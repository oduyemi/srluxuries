"use client";
import { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Alert, 
  Collapse, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions 
} from "@mui/material";


export const MailPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSend = async () => {
    if (!from || !validateEmail(from)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!subject || !message) {
      setStatus({ type: "error", message: "Subject and message are required." });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-support-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: "hello@oduyemi.dev", subject, message }),
      });

      if (!res.ok) throw new Error("Failed to send email");

      setStatus({ type: "success", message: "Your message has been sent successfully!" });
      setFrom("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus({ type: "error", message: "Failed to send email. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Contact Support</DialogTitle>
        <DialogContent>
          <Typography variant="h5" className="font-bold mb-4">Contact Support</Typography>
            <Collapse in={!!status}>
              {status && <Alert severity={status.type} className="mb-4">{status.message}</Alert>}
            </Collapse>
          <TextField fullWidth label="Your Email" value={from} onChange={(e) => setFrom(e.target.value)} className="mb-3" />
          <TextField fullWidth label="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="mb-3" />
          <TextField fullWidth label="Message" value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={5} className="mb-3" />
        </DialogContent>
         <DialogActions>
          <Box className="flex justify-end gap-3 mt-3">
            <Button 
              sx={{ 
                borderColor: "#D4A017", 
                color: "#D4A017", 
                px: 3, 
                py: 1, 
                fontSize: { xs: "0.9rem", sm: "1rem" }, 
                borderRadius: 3, 
                "&:hover": { 
                  backgroundColor: "#FFC857", 
                  color: "#1F1F1F" 
                }, 
              }}
              onClick={onClose} 
              disabled={sending}
            >
              Cancel
            </Button>
            <Button 
              sx={{ 
                backgroundColor: "#D4A017", 
                color: "#1F1F1F", 
                px: 3, 
                py: 1, 
                fontSize: { xs: "0.9rem", sm: "1rem" }, 
                borderRadius: 3, 
                "&:hover": { 
                  backgroundColor: "#FFC857", 
                  color: "#1F1F1F" 
                }, 
              }}
              onClick={handleSend} 
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </Button>
          </Box>
        </DialogActions>
    </Dialog>
  );
};
