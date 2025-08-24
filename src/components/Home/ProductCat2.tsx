"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography, Skeleton } from "@mui/material";
import ProductCatCard from "./ProductCatCard";
import { motion } from "framer-motion";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

export const ProductCat2 = () => {
  const [footwearsProducts, setFootwearsProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products/footwears");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();

        // 🔀 Shuffle products randomly
        const shuffled = data.sort(() => Math.random() - 0.5);

        setFootwearsProducts(shuffled);
      } catch (error) {
        console.error("Error fetching footwears:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Header */}
      <Box className="container">
        <Box className="flex justify-center mb-8 p-4">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className="gold_title text-gray-50 font-extrabold md:text-8xl sm:text-5xl flex items-center justify-center gap-4"
            >
              <Link href="/foot" className="flex items-center group">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="currentColor"
                  className="bi bi-arrow-right text-gray-50 group-hover:text-yellow-400 transition-colors"
                  viewBox="0 0 16 16"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                      0 0 1 .708-.708l4 4a.5.5 0 0 1 0 
                      .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
                      8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </motion.svg>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="ml-2 hover:text-yellow-400 transition-colors"
                >
                  footwears
                </motion.span>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Products */}
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-14 gap-x-10 mt-4 mb-14 px-4"
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <Box key={i} className="w-full">
                <Skeleton variant="rectangular" width="100%" height={280} className="rounded-2xl" />
                <Skeleton variant="text" width="80%" className="mt-2" />
                <Skeleton variant="text" width="40%" />
              </Box>
            ))
          : footwearsProducts.length > 0
          ? footwearsProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -6 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <ProductCatCard
                  normalImageSrc={product.productImage}
                  hoverImageSrc={product.productHoverImage}
                  productName={product.productName}
                  price={product.price}
                />
              </motion.div>
            ))
          : (
            <Box className="col-span-full flex flex-col items-center justify-center py-12 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-3"
              >
                <path d="M3 9.5L12 4l9 5.5v9l-9 5-9-5v-9z" />
                <path d="M12 4v5.5" />
                <path d="M3 9.5l9 5.5 9-5.5" />
              </svg>
              <Typography variant="h6">No footwears available right now.</Typography>
            </Box>
          )}
      </Box>
    </>
  );
};
