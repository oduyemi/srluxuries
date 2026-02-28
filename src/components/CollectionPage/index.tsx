"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";
import { motion } from "framer-motion";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

const shuffleArray = (array: Products[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SectionHeader = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => (
  <Box className="text-center mb-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 6,
          color: "#b89b5e",
          fontWeight: 600,
        }}
      >
        SR LUXURIES
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          mt: 2,
          fontSize: { xs: "28px", md: "42px" },
          color: "#111",
        }}
      >
        {title}
      </Typography>

      {/* Elegant Accent Line */}
      <Box
        sx={{
          width: 60,
          height: 2,
          backgroundColor: "#b89b5e",
          mx: "auto",
          mt: 3,
        }}
      />

      <Link
        href={link}
        className="inline-block mt-6 text-gray-600 hover:text-black transition-all tracking-wide"
      >
        View Collection →
      </Link>
    </motion.div>
  </Box>
);

const ProductGrid = ({ products }: { products: Products[] }) => (
  <Box
    maxWidth="xl"
    className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6 mb-32"
  >
    {products.map((product, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
      >
        <ProductCatCard
          normalImageSrc={product.productImage}
          hoverImageSrc={product.productHoverImage}
          productName={product.productName}
          price={product.price}
        />
      </motion.div>
    ))}
  </Box>
);

export const CollectionPage = () => {
  const [shirtsProducts, setShirtsProducts] = useState<Products[]>([]);
  const [tradProducts, setTradProducts] = useState<Products[]>([]);
  const [corporateProducts, setCorporateProducts] = useState<Products[]>([]);
  const [summerProducts, setSummerProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async (
      endpoint: string,
      setter: (data: Products[]) => void
    ) => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setter(shuffleArray(data));
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    };

    fetchData("/api/products/shirts", setShirtsProducts);
    fetchData("/api/products/trad", setTradProducts);
    fetchData("/api/products/corporate", setCorporateProducts);
    fetchData("/api/products/two-piece", setSummerProducts);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        pb: { xs: 10, md: 18 },
      }}
    >
      {/* ===== HERO ===== */}
      <Box maxWidth="xl" className="mx-auto text-center mb-28 mt-0 px-6 collection">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 8,
              color: "#b89b5e",
              fontWeight: 600,
            }}
          >
            SR LUXURIES
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 4,
              fontWeight: 900,
              fontSize: { xs: "40px", md: "72px" },
              color: "#111",
              lineHeight: 1.1,
            }}
          >
            Refined
            <br />
            Collection
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 6,
              color: "#fff",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "18px",
            }}
          >
            Curated craftsmanship across traditional elegance,
            modern corporate structure and expressive seasonal sets.
          </Typography>
        </motion.div>
      </Box>

      {/* ===== SECTIONS ===== */}
      <SectionHeader title="Casual Shirts" link="/shirts" />
      <ProductGrid products={shirtsProducts} />

      <SectionHeader title="Traditional Wears" link="/trad-wears" />
      <ProductGrid products={tradProducts} />

      <SectionHeader title="Corporate Wears" link="/corporate-wears" />
      <ProductGrid products={corporateProducts} />

      <SectionHeader title="Two-Piece Sets" link="/two-piece" />
      <ProductGrid products={summerProducts} />
    </Box>
  );
};