"use client";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export const Banner = () => {
  return (
    <Box
      className="relative w-full min-h-[92vh] flex items-center bg-cover bg-center"
      sx={{
        backgroundImage:
          "url(https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/general/home.jpg)",
      }}
    >
      {/* Gradient Overlay (more premium than flat black) */}
      <Box className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <Container maxWidth="xl" className="relative z-10">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl px-4 md:px-0"
        >
          {/* Brand Label */}
          <Typography
            variant="overline"
            className="uppercase tracking-[0.35em] text-[#CD8F2C] font-semibold"
          >
            SR Luxuries
          </Typography>

          {/* Hero Title */}
          <Typography
            variant="h1"
            className="mt-6 text-white font-extrabold leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Presence.
            <br />
            <span className="text-[#CD8F2C]">Refined.</span>
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            className="mt-6 text-gray-200 max-w-md text-base md:text-lg leading-relaxed"
          >
            Tailored traditional and corporate pieces crafted for men who
            understand the power of appearance.
          </Typography>

          {/* CTA */}
          <Box className="mt-10">
            <Link href="/shop">
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg,#CD8F2C,#b37a25)",
                  color: "#fff",
                  padding: "0.95rem 2.8rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 15px 40px rgba(205,143,44,0.35)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#b37a25,#CD8F2C)",
                  },
                }}
              >
                Explore Collection
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};