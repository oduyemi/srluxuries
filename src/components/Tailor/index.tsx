"use client";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Tailor = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        maxWidth="xl"
        className="mx-auto mb-20 px-6 py-16 text-center md:text-left bg-gradient-to-r from-butter/40 to-goldie/20 rounded-3xl shadow-xs"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <Typography
            variant="h6"
            className="uppercase tracking-[6px] text-tan font-semibold mb-3"
          >
            Services
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-snug text-butter drop-shadow-none"
          >
            Tailored-To-Fit{" "}
            <span className="text-[#39A9DB]">D E S I G N S</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Our tailored-to-fit gives you the opportunity to present your
            imaginative designs. Our expert tailors craft **luxury pieces**
            that bring your vision to life with precision and elegance.
          </Typography>

          <Box className="mt-8">
            <Link href="/custom-image">
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(205,143,44,0.6)" }}
                whileTap={{ scale: 0.95 }}
                sx={{ backgroundColor: "#CD8F2C" }}
                className="rounded-xl bg-goldie px-8 py-3 text-lg font-semibold text-black shadow-none hover:bg-tan hover:text-white border border-goldie hover:border-tan transition-all duration-300"
              >
                Upload Style
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Consultancy Section */}
      <Box className="mx-auto px-6 py-16 bg-white/60 backdrop-blur-md rounded-3xl shadow-xs">
        <Box className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <Image
              src="/assets/images/consultancy.png"
              alt="Consultancy collage"
              width={520}
              height={560}
              className="rounded-3xl object-cover shadow-xs group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Typography
              variant="h3"
              className="mb-6 text-goldie text-3xl md:text-4xl font-bold tracking-wide"
            >
              CONSULTANCY
            </Typography>
            <Typography
              variant="body1"
              className="mb-5 text-gray-700 leading-relaxed"
            >
              &quot;SR LUXURIES consultancy has grown into a highly personalized
              experience...&quot;
            </Typography>
            <Typography
              variant="body1"
              className="mb-8 font-semibold text-gray-800 leading-relaxed"
            >
              Do you need expert advice on your project or occasion? Book an
              appointment today and enjoy **luxury consulting at its best**.
            </Typography>
            <Link href="/appointment">
              <Button
                component={motion.button}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(205,143,44,0.6)" }}
                whileTap={{ scale: 0.95 }}
                sx={{ backgroundColor: "#CD8F2C" }}
                className="rounded-xl bg-goldie px-8 py-3 text-lg font-semibold text-black shadow-none hover:bg-tan hover:text-white border border-goldie hover:border-tan transition-all duration-300"
              >
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>

      {/* Showcase Carousel */}
      <Box className="mx-auto mt-20 max-w-6xl px-6">
        <Typography
          variant="h4"
          className="text-center text-3xl font-extrabold mb-8 text-tan"
        >
          Featured Tailored Designs
        </Typography>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {["design1.jpg", "design2.jpg", "design3.jpg"].map((design, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-xs bg-white"
              >
                <Image
                  src={`/assets/images/${design}`}
                  alt={`Tailored Design ${idx + 1}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[400px]"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
