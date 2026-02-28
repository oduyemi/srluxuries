"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ProductCatCardProps {
  normalImageSrc: string;
  hoverImageSrc: string;
  productName: string;
  price: number;
}

export default function ProductCatCard({
  normalImageSrc,
  hoverImageSrc,
  productName,
  price,
}: ProductCatCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBuyViaWhatsApp = () => {
    const whatsappMessage = `Hi, I would like to buy:
Product Name: ${productName}
Price: ₦${price.toLocaleString()}
Image: ${normalImageSrc}`;

    const whatsappLink = `https://wa.me/2349159999965?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group w-full max-w-sm bg-white border border-gray-100 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image Section */}
      <Box className="relative w-full h-[340px] overflow-hidden bg-gray-50">
        {/* Main Image */}
        <Image
          src={normalImageSrc}
          alt={productName}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Image */}
        <Image
          src={hoverImageSrc}
          alt={productName}
          fill
          className={`object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Soft gradient overlay */}
        <Box className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Quick Action Button (Appears on hover) */}
        <Box
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            onClick={handleBuyViaWhatsApp}
            sx={{
              background: "#25D366",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "999px",
              padding: "8px 20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              "&:hover": {
                background: "#1ebe5d",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </Box>

      {/* Product Info */}
      <Box className="px-6 py-5 text-center">
        <Typography
          variant="subtitle1"
          className="font-medium text-gray-900 capitalize tracking-wide"
        >
          {productName}
        </Typography>

        <Typography
          variant="h6"
          className="mt-2 font-bold text-gray-700"
          sx={{
            letterSpacing: "0.5px",
          }}
        >
          ₦ {price.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}