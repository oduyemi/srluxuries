"use client";
import { Box, Typography, Button, Divider } from "@mui/material";
import Link from "next/link";

export const Location = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        px: { xs: 2, md: 6 },
        py: 10,
      }}
      className="locate bg-gradient-to-b from-white via-[#fdfcf8] to-[#faf5ef]"
    >
      {/* Map Section */}
      <Box
        sx={{
          flex: "1 1 500px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
        className="shadow-xs transform transition duration-700 hover:scale-[1.02]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3221598913547!2d3.3459221748366965!3d6.606830722189691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922c2a96a9bd%3A0x1b4ca3112411efbb!2s117%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694439529083!5m2!1sen!2sng"
          width="100%"
          height="450"
          loading="lazy"
          style={{ border: "0" }}
        ></iframe>
      </Box>

      {/* Contact Info */}
      <Box
        sx={{
          flex: "1 1 350px",
          textAlign: { xs: "center", md: "left" },
        }}
        className="contact-info bg-white/70 backdrop-blur-xl rounded-2xl shadow-xs p-6 md:p-10 transform transition duration-700 hover:shadow-md"
      >
        <Typography
          variant="h2"
          gutterBottom
          className="text-goldie spaced_title font-extrabold mb-4 leading-tight"
        >
          How to Find <span className="text-bluey">SR LUXURIES</span>
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 300, mb: 4, lineHeight: 1.8 }}
        >
          Need something? Our team is here to help! Reach us with the
          details below, or fill the Contact Form and we’ll get back to you shortly.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Contact Details */}
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          className="text-lg"
        >
          <Typography>
            <span className="font-semibold text-tan">📍 Address: </span>
            <span className="font-light">
              117, Obafemi Awolowo Way, Ikeja, Lagos
            </span>
          </Typography>

          <Typography>
            <span className="font-semibold text-tan">📞 Telephone: </span>
            <span className="font-light">+234 915 999 9965</span>
          </Typography>

          <Typography>
            <span className="font-semibold text-tan">✉️ Email: </span>
            <Link
              href="mailto:contact@srluxuries.com"
              className="text-butter hover:underline font-medium"
            >
              contact@srluxuries.com
            </Link>
          </Typography>
        </Box>

        {/* Button */}
        <Box sx={{ mt: 5 }} className="flex justify-center md:justify-start">
          <Link href="/contact">
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#CD8F2C",
                borderRadius: "12px",
                px: 4,
                py: 1.8,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: "#b97a24",
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              Get in Touch
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
