"use client";
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

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
    *Product Name:* ${productName}
    *Price:* ₦ ${price}
    *Image:* ${normalImageSrc}`;
    const whatsappLink = `https://wa.me/+2349159999965?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      className="w-full max-w-xs sm:max-w-sm bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover effect */}
      <Box className="relative w-full h-80 overflow-hidden">
        <img
          src={isHovered ? hoverImageSrc : normalImageSrc}
          alt={productName}
          className={`h-full w-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {/* Optional dark overlay when hovered */}
        {isHovered && (
          <Box className="absolute inset-0 bg-black/20 transition-opacity" />
        )}
      </Box>

      {/* Product Info */}
      <Box className="p-5 flex flex-col items-center">
        <Typography
          variant="h6"
          className="text-center font-semibold text-gray-800 truncate w-full capitalize"
        >
          {productName}
        </Typography>
        <Typography
          variant="h5"
          className="text-brownie font-bold my-3 tracking-wide"
        >
           ₦ {price.toLocaleString()}
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(135deg, #CD8F2C 0%, #d6a756 50%, #b87d1a 100%)",
            color: "white",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "12px",
            padding: "10px 20px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              background:
                "linear-gradient(135deg, #b87d1a 0%, #CD8F2C 50%, #d6a756 100%)",
            },
          }}
          onClick={handleBuyViaWhatsApp}
        >
          Buy via WhatsApp
        </Button>
      </Box>
    </Box>
  );
}
