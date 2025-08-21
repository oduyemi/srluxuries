"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export const Promotions = () => {
  return (
    <Container maxWidth="xl" className="mb-12">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center py-16 rounded-2xl shadow-none bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]"
      >
        {/* Header */}
        <Typography
          variant="h6"
          className="uppercase tracking-widest font-bold text-tan mb-2"
        >
          promotions
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          className="gold_title font-extrabold mb-4 text-butter text-3xl md:text-5xl"
        >
          SRL
          <span className="pl-2 text-[#39A9DB]">Specials</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          className="text-base md:text-lg text-tan max-w-md mx-auto mb-6"
        >
          Don&apos;t miss out on another good deal.
        </Typography>

        {/* Button */}
        <Box className="flex justify-center">
          <Link href="/shop">
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                backgroundColor: "#CD8F2C",
                color: "#fff",
                fontSize: "1.1rem",
                padding: "0.75rem 2rem",
                borderRadius: "2rem",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "0 8px 20px rgba(205,143,44,0.3)",
                "&:hover": {
                  backgroundColor: "#b37a25",
                  boxShadow: "0 8px 24px rgba(205,143,44,0.5)",
                },
              }}
            >
              Shop Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
