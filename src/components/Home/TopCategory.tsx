"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";

export const TopCategory = () => {
  return (
    <Container maxWidth="xl" className="my-16">
      <Grid
        container
        spacing={6}
        alignItems="center"
        className="bg-img background-overlay rounded-2xl shadow-none py-12 px-6"
      >
        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/custom.jpg"
            alt="Top Category"
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded-xl"
          />
        </Grid>

        {/* Text Section */}
        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box className="text-center md:text-left">
            <Typography
              variant="h6"
              className="uppercase tracking-widest font-semibold text-butter mb-2"
            >
              Custom Designs
            </Typography>

            <Typography
              variant="h3"
              className="text-tan font-extrabold text-4xl md:text-5xl leading-tight mb-4"
            >
              Tailored-To-Fit
            </Typography>

            <Typography
              variant="body1"
              className="text-gray-300 max-w-md mx-auto md:mx-0 mb-6"
            >
              Experience premium bespoke fashion with designs crafted uniquely
              for you. Precision, elegance, and comfort — all in one.
            </Typography>

            <Link href="/services">
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained"
                sx={{
                  backgroundColor: "#CD8F2C",
                  color: "#fff",
                  padding: "0.75rem 2rem",
                  borderRadius: "2rem",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "0 6px 16px rgba(205,143,44,0.4)",
                  "&:hover": {
                    backgroundColor: "#b37a25",
                    boxShadow: "0 8px 20px rgba(205,143,44,0.6)",
                  },
                }}
              >
                Order Now
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
