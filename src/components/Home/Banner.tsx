"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <Box
      className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
      sx={{
        backgroundImage:
          "url(https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/general/home.jpg)",
      }}
    >
      {/* Overlay */}
      <Box className="absolute inset-0 bg-black/50 z-0" />

      <Container maxWidth="xl" className="relative z-10">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left max-w-2xl px-4"
        >
          {/* Brand */}
          <Typography
            variant="h6"
            className="uppercase tracking-[0.25em] font-bold text-goldie mb-4 md:mb-6"
          >
            sr luxuries
          </Typography>

          {/* Hero Title */}
          <Typography
            variant="h2"
            className="gold_title text-white font-extrabold leading-snug text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Better when it&apos;s on you.
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            className="text-gray-200 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 text-lg sm:text-xl"
          >
            Explore our exclusive collection of luxury apparel and accessories crafted to perfection.
          </Typography>

          {/* CTA Button */}
          <Link href="/collection">
            <Button
              component={motion.button}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                backgroundColor: "#CD8F2C",
                color: "#fff",
                padding: "0.9rem 2.5rem",
                borderRadius: "2rem",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                boxShadow: "0 10px 24px rgba(205,143,44,0.4)",
                "&:hover": {
                  backgroundColor: "#b37a25",
                  boxShadow: "0 12px 28px rgba(205,143,44,0.6)",
                },
              }}
            >
              View Collection
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Decorative Accent Circles (optional) */}
      <Box className="absolute top-10 right-10 w-32 h-32 rounded-full bg-yellow-500/20 animate-pulse hidden md:block" />
      <Box className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-yellow-500/20 animate-pulse hidden md:block" />
    </Box>
  );
};
