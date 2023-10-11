"use client";
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image"

interface SingleProductCardProps {
  productName: string;
  imageSrc: string;
  hoverImageSrc: string;
  price: string;
  availability: string;
  description: string;
}

const SingleProductCard: React.FC<SingleProductCardProps> = ({
  productName,
  imageSrc,
  hoverImageSrc,
  price,
  availability,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Box className="py-8">
      <Box className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Box className="flex flex-col md:flex-row -mx-4 items-center justify-center">
          <Box className="md:flex-1 px-4">
            <Box
              className="h-[460px] rounded-lg bg-transparent mb-4"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <Image
                width="600"
                height="600"
                alt="Product Image"
                src={isHovered ? hoverImageSrc : imageSrc}
                className="w-full h-full object-contain"
              />
            </Box>
            
          </Box>
          <Box className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2 text-ggreen">{productName}</h2>
            <p className="text-gray-600 text-sm mb-4"> {description}</p>
            <Box className="flex mb-4 flex-col">
              <Box className="mr-4">
                <span className="font-bold text-bluey">Price:</span>
                <span className="text-gray-600"> &#8358; {price}</span>
              </Box>
              <Box>
                <span className="font-bold text-bluey">Availability:</span>
                <span className="text-gray-600"> {availability}</span>
              </Box>
              <Box className="mb-4">
                    <Box className="flex items-center mt-2">
                        <span className="font-bold text-bluey">Select Colour:</span> &emsp;
                        <button className="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                        <button className="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                    </Box>
                </Box>
            </Box>
            <Box className="flex -mx-2 mb-4">
              <Box className="w-1/2 px-2">
                <button className="w-full bg-goldie py-2 px-3 rounded-full font-bold hover:bg-tan hover:text-white border border-goldie
                hover:border-tan">Add to Cart</button>
              </Box>
              <Box className="w-1/2 px-2">
                <button className="w-full bg-gray-400 text-gray-800 py-2 px-3 rounded-full font-bold hover:bg-tan hover:text-white border border-goldie
                 hover:border-tan">Add to Wishlist</button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductCard;
