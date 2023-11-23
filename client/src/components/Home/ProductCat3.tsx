"use client";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "./ProductCatCard";
import Link from "next/link";
import "animate.css";

interface Products {
  ProductName: string;
  Price: number;
  ProductImage: string;
  ProductHoverImage: string;
}

export const ProductCat3 = () => {
  const [beltsProducts, setBeltsProducts] = useState<Products[]>([]);
  const [beadsProducts, setBeadsProducts] = useState<Products[]>([]);
  const [capsProducts, setCapsProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchBeltsData = async () => {
      try {
        const response = await fetch("https://api.srl.yemi.dev/products/belts");
        const beltsdata = await response.json();
        setBeltsProducts(beltsdata);
      } catch (error) {
        console.error('Error fetching product belts:', error);
      }
    };

    const fetchBeadsData = async () => {
      try {
        const response = await fetch("https://thesrluxuries.com:3001/products/beads");
        const beadsdata = await response.json();
        setBeadsProducts(beadsdata);
      } catch (error) {
        console.error('Error fetching product beads:', error);
      }
    };

    const fetchCapsData = async () => {
      try {
        const response = await fetch("https://thesrluxuries.com:3001/products/caps");
        const capsdata = await response.json();
        setCapsProducts(capsdata);
      } catch (error) {
        console.error('Error fetching product trad:', error);
      }
    };

    fetchBeltsData();
    fetchBeadsData();
    fetchCapsData();
  }, []);

  return (
    <>
      <Box>
        <Box className="container">
          <Box className="justify-center mb-5 p-4 mt-10">
            <Box maxWidth="xl" className="text-center">
              <Typography
                variant="h2"
                className="gold_title text-gray-50 font-extrabold md:text-9xl sm:text-6xl mt-0 mb-4"
              >
                <span>
                  <Link href="/accessories">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      fill="currentColor"
                      className="bi bi-arrow-right inline text-gray-50"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </Link>
                </span>
                <Link
                  href="/accessories"
                  className="animate__animated animate__flash animate__delay-3s"
                >
                  accessories
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5"
      >
        {beltsProducts.slice(0, 1).map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.ProductImage}
            hoverImageSrc={product.ProductHoverImage}
            productName={product.ProductName}
            price={product.Price}
          />
        ))}

        {beadsProducts.slice(0, 1).map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.ProductImage}
            hoverImageSrc={product.ProductHoverImage}
            productName={product.ProductName}
            price={product.Price}
          />
        ))}

        {capsProducts.slice(0, 1).map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.ProductImage}
            hoverImageSrc={product.ProductHoverImage}
            productName={product.ProductName}
            price={product.Price}
          />
        ))}
      </Box>
    </>
  );
};
