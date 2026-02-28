"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

// Fisher-Yates Shuffle (cleaner + proper)
const shuffleArray = (array: Products[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const CategorySection = ({
  title,
  link,
  products,
}: {
  title: string;
  link: string;
  products: Products[];
}) => {
  if (!products.length) return null;

  return (
    <Box className="mb-32">
      {/* Section Header */}
      <Box className="text-center mb-14">
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 5,
            fontWeight: 600,
            color: "#b89b5e",
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
      </Box>

      {/* Product Grid */}
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-6"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
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
    </Box>
  );
};

export const ShopPage = () => {
  const [shirts, setShirts] = useState<Products[]>([]);
  const [trad, setTrad] = useState<Products[]>([]);
  const [corporate, setCorporate] = useState<Products[]>([]);
  const [summer, setSummer] = useState<Products[]>([]);
  const [foot, setFoot] = useState<Products[]>([]);
  const [beads, setBeads] = useState<Products[]>([]);
  const [belts, setBelts] = useState<Products[]>([]);
  const [caps, setCaps] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async (
      endpoint: string,
      setter: (data: Products[]) => void
    ) => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setter(shuffleArray(data));
      } catch (err) {
        console.error(`Error fetching ${endpoint}`, err);
      }
    };

    fetchData("/api/products/shirts", setShirts);
    fetchData("/api/products/trad", setTrad);
    fetchData("/api/products/corporate", setCorporate);
    fetchData("/api/products/two-piece", setSummer);
    fetchData("/api/products/footwears", setFoot);
    fetchData("/api/products/beads", setBeads);
    fetchData("/api/products/belts", setBelts);
    fetchData("/api/products/caps", setCaps);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        pb: { xs: 10, md: 18 },
      }}
    >
      {/* ===== HERO ===== */}
      <Box maxWidth="xl" className="mx-auto text-center mb-32 px-6 collection" id="store">
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
              fontSize: { xs: "38px", md: "68px" },
              color: "#111",
              lineHeight: 1.1,
            }}
          >
            Explore
            <br />
            The Shop
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 6,
              color: "#666",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "18px",
            }}
          >
            A complete expression of SR Luxuries — from refined tailoring
            to handcrafted accessories.
          </Typography>
        </motion.div>
      </Box>

      {/* ===== CATEGORIES ===== */}
      <CategorySection title="Shirts" link="/shirts" products={shirts} />
      <CategorySection title="Traditional Wears" link="/trad" products={trad} />
      <CategorySection title="Corporate Wears" link="/corporate" products={corporate} />
      <CategorySection title="Two-Piece Sets" link="/two-piece" products={summer} />
      <CategorySection title="Footwears" link="/foot" products={foot} />
      <CategorySection title="Beads" link="/beads" products={beads} />
      <CategorySection title="Belts" link="/belts" products={belts} />
      <CategorySection title="Caps" link="/caps" products={caps} />
    </Box>
  );
};