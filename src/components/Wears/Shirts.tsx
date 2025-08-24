"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

export const Shirts = () => {
  const [shirtsProducts, setShirtsProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/shirts");
        if (!response.ok) {
          console.error("HTTP error!", response.status, response.statusText);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Products[] = await response.json();

        // Shuffle the products array
        const shuffled = data
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);

        setShirtsProducts(shuffled);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box maxWidth="xl" className="mb-5 mx-auto">
        <Box className="collection mx-auto" id="shirts">
          <Box className="abt-desc">
            <Typography variant="h6" className="font-extrabold text-goldie pl-10">
              SR LUXURIES
            </Typography>
            <Typography
              variant="h2"
              className="text-5xl font-extrabold mb-2 text-tan w-2/3 mb-4 pl-10 mt-0"
            >
              SRL Casual Shirts
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5 max-w-7xl">
        {shirtsProducts.map((product, index) => (
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
