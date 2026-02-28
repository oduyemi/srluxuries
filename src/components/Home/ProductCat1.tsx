"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography, Skeleton } from "@mui/material";
import ProductCatCard from "./ProductCatCard";
import { motion } from "framer-motion";

interface Product {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

export const ProductCat1 = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Proper Fisher-Yates shuffle
  const shuffleArray = (array: Product[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tradRes, corpRes] = await Promise.all([
          fetch("/api/products/trad"),
          fetch("/api/products/corporate"),
        ]);

        const tradData = await tradRes.json();
        const corpData = await corpRes.json();

        // Merge + shuffle
        const merged = [...tradData, ...corpData];
        const shuffled = shuffleArray(merged);

        setProducts(shuffled);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        // background:
        //   "linear-gradient(180deg, #0f0f0f 0%, #141414 60%, #0f0f0f 100%)",
        py: { xs: 10, md: 14 },
      }}
    >
      {/* Header Section */}
      <Box className="container mx-auto px-4 mb-14">
        <Box
          className="text-center py-10 rounded-3xl backdrop-blur-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]"
          sx={{
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: 4, color: "#c9a227" }}
          >
            FEATURED COLLECTION
          </Typography>

          <Typography
            variant="h2"
            className="font-extrabold text-white mt-3 md:text-6xl sm:text-4xl"
          >
            Curated Essentials
          </Typography>
          <Link
            href="/collection"
            className="inline-flex items-center mt-6 text-yellow-400 hover:text-yellow-300 transition-all"
          >
            View Full Collection →
          </Link>
        </Box>
      </Box>

      {/* Product Grid */}
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4"
      >
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <Box key={i} className="w-full">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={300}
                  className="rounded-3xl"
                  sx={{ bgcolor: "rgba(255,255,255,0.05)" }}
                />
                <Skeleton
                  variant="text"
                  width="70%"
                  sx={{ bgcolor: "rgba(255,255,255,0.05)", mt: 2 }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  sx={{ bgcolor: "rgba(255,255,255,0.05)" }}
                />
              </Box>
            ))
          : products.length > 0
          ? products.slice(0, 4).map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -8 }}
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
            <Box className="col-span-full flex flex-col items-center justify-center py-16 text-gray-400">
              <Typography variant="h6">
                No products available right now.
              </Typography>
            </Box>
          )}
      </Box>
    </Box>
  );
};