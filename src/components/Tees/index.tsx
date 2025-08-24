"use client"
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

// Utility to shuffle products
const shuffleArray = (array: Products[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const Tees = () => {
  const [teesProducts, setTeesProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/tees");
        if (!response.ok) {
          console.error("HTTP error!", response.status, response.statusText);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Products[] = await response.json();

        // shuffle before saving
        setTeesProducts(shuffleArray(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box maxWidth="xl" className="mb-5 mx-auto">
        <Box className="collection mx-auto" id="tees">
          <Box className="abt-desc">
            <Typography variant="h6" className="font-extrabold text-goldie">
              S R LUXURIES
            </Typography>
            <Typography
              variant="h2"
              className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0"
            >
              Tee-Shirts
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {teesProducts.map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.productImage}
            hoverImageSrc={product.productHoverImage}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </Box>
    </>
  );
};
