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
        className="mx-auto mb-20 px-6 py-20 text-center md:text-left 
                   bg-gradient-to-r from-butter/50 via-goldie/30 to-tan/20 
                   rounded-3xl shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <Typography
            variant="h6"
            className="uppercase tracking-[6px] text-tan font-semibold mb-4"
          >
            Services
          </Typography>
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-butter drop-shadow-sm"
          >
            Tailored-To-Fit{" "}
            <span className="text-[#39A9DB]">D E S I G N S</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-lg text-gray-800 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Present your <span className="font-semibold text-tan">imaginative designs</span> 
            and watch our expert tailors craft{" "}
            <span className="font-semibold text-goldie">luxury pieces</span> 
            with precision and elegance.
          </Typography>

          <Box className="mt-10">
            <Link href="/custom-image">
              <Button
                component={motion.button}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 6px 30px rgba(205,143,44,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  background: "linear-gradient(135deg, #CD8F2C, #EAC784)", 
                  color: "#000",
                  borderRadius: "1rem",
                  padding: "0.9rem 2rem",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Upload Style
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>

      {/* Consultancy Section */}
      <Box className="mx-auto px-6 py-20 bg-white/70 backdrop-blur-2xl rounded-3xl shadow-lg">
        <Box className="grid md:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
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
              className="rounded-3xl object-cover shadow-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                           rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
              Need expert advice on your project or occasion? Book an
              appointment today and enjoy{" "}
              <span className="text-tan">luxury consulting at its best</span>.
            </Typography>
            <Link href="/appointment">
              <Button
                component={motion.button}
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 6px 30px rgba(205,143,44,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                sx={{ 
                  background: "linear-gradient(135deg, #CD8F2C, #EAC784)", 
                  color: "#000",
                  borderRadius: "1rem",
                  padding: "0.9rem 2rem",
                  fontWeight: 600,
                  fontSize: "1rem"
                }}
              >
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Box>

      {/* Showcase Carousel */}
      <Box className="mx-auto mt-24 max-w-7xl px-6 mb-16">
        <Typography
          variant="h4"
          className="text-center text-3xl md:text-4xl font-extrabold mb-12 text-tan"
        >
          Featured Tailored Designs
        </Typography>
        <Swiper
          spaceBetween={28}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1756051680/srl/contemporary/emiratiStyle.jpg",
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1695562025/srl/trad/td-3.jpg",
            "https://res.cloudinary.com/dymd1jkbl/image/upload/v1756050894/srl/contemporary/manmade.jpg",
          ].map((design, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative rounded-2xl overflow-hidden shadow-lg bg-white group"
              >
                <Image
                  src={design}
                  alt={`Tailored Design ${idx + 1}`}
                  width={160}
                  height={500}
                  className="object-cover w-full h-[420px] group-hover:opacity-90 transition duration-300"
                />
                <div className="absolute bottom-0 w-full p-4 
                                bg-gradient-to-t from-black/70 to-transparent 
                                opacity-0 group-hover:opacity-100 transition duration-500">
                  <Typography className="text-white text-lg font-semibold">
                    Design {idx + 1}
                  </Typography>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};
