"use client";
import Image from "next/image";
import { Box } from "@mui/material";

const brandLogos = [
  "/assets/images/brands/brand1.png",
  "/assets/images/brands/brand2.png",
  "/assets/images/brands/brand3.png",
  "/assets/images/brands/brand4.png",
  "/assets/images/brands/brand5.png",
  "/assets/images/brands/brand6.png",
];

export const Brands = () => {
  return (
    <Box className="brands-area flex flex-wrap items-center justify-center gap-6 py-10 px-4 md:justify-between">
      {brandLogos.map((logo, index) => (
        <Box key={index} className="flex items-center justify-center">
          <Image
            src={logo}
            alt={`Brand Logo ${index + 1}`}
            width={80}
            height={80}
            className="object-contain"
          />
        </Box>
      ))}
    </Box>
  );
};
