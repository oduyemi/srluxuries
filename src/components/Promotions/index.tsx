"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

export const Promotions = () => {
  return (
    <Container maxWidth="xl" className="mb-20">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-neutral-800 border border-gray-100 rounded-3xl px-6 md:px-16 py-16 text-center shadow-sm"
      >
        {/* Subtle Background Accent */}
        <Box className="relative z-10 flex flex-col items-center">

        {/* Overline */}
        <Typography
          variant="overline"
          className="uppercase tracking-[0.25em] text-gray-500 font-semibold"
        >
          Limited Offer
        </Typography>

        {/* Title */}
        <Typography
          variant="h2"
          className="font-extrabold mt-3 text-3xl md:text-5xl text-white text-center"
        >
          SRL <span className="text-[#CD8F2C]">Specials</span>
        </Typography>

        {/* Body wrapped in controlled width container */}
        <Box className="mt-5 max-w-md text-center">
          <Typography
            variant="body1"
            className="text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Curated traditional and corporate pieces for modern distinction.
          </Typography>
        </Box>

        {/* CTA */}
        <Box className="mt-8">
          <Link href="/collection">
            <Button
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              variant="contained"
              sx={{
                background: "linear-gradient(135deg,#CD8F2C,#b37a25)",
                color: "#fff",
                padding: "0.85rem 2.5rem",
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                boxShadow: "0 10px 30px rgba(205,143,44,0.25)",
              }}
            >
              Explore Collection
            </Button>
          </Link>
        </Box>
        </Box>
      </Box>
    </Container>
  );
};