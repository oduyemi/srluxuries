"use client";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function NotFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      textAlign="center"
      p={3}
    >
      <SentimentVeryDissatisfiedIcon sx={{ fontSize: 80, color: "gray" }} />
      <Typography variant="h3" className="text-brownie" fontWeight="bold" mt={2}>
        404 – Page Not Found
      </Typography>
      <Typography variant="body1" mt={2} maxWidth="500px">
        Oops! Looks like this page decided to take a vacation. 🌴  
        Either it never existed, or it&apos;s hiding from us right now.  
      </Typography>
      <Typography variant="body2" mt={1} color="text.secondary">
        (Don&apos;t worry, we already filed a missing page report. 📂)
      </Typography>

      <Link href="/" passHref>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4, borderRadius: "12px", textTransform: "none",  background: "linear-gradient(135deg, #CD8F2C, #EAC784)" }}
        >
          🚀 Take me back home
        </Button>
      </Link>
    </Box>
  );
}
