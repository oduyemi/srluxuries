"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";
import "animate.css";

interface Products {
  productName: string;
  price: number;
  productImage: string;
  productHoverImage: string;
}

// Utility function to shuffle array (Fisher-Yates shuffle)
const shuffleArray = (array: Products[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const CollectionPage = () => {
  const [teesProducts, setTeesProducts] = useState<Products[]>([]);
  const [shirtsProducts, setShirtsProducts] = useState<Products[]>([]);
  const [tradProducts, setTradProducts] = useState<Products[]>([]);
  const [corporateProducts, setCorporateProducts] = useState<Products[]>([]);
  const [summerProducts, setSummerProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchTeesData = async () => {
      try {
        const response = await fetch("/api/products/tees");
        const teesdata = await response.json();
        setTeesProducts(shuffleArray(teesdata));
      } catch (error) {
        console.error("Error fetching product tees:", error);
      }
    };

    const fetchShirtsData = async () => {
      try {
        const response = await fetch("/api/products/shirts");
        const shirtsdata = await response.json();
        setShirtsProducts(shuffleArray(shirtsdata));
      } catch (error) {
        console.error("Error fetching product shirts:", error);
      }
    };

    const fetchTradData = async () => {
      try {
        const response = await fetch("/api/products/trad");
        const traddata = await response.json();
        setTradProducts(shuffleArray(traddata));
      } catch (error) {
        console.error("Error fetching product trad:", error);
      }
    };

    const fetchCorporateData = async () => {
      try {
        const response = await fetch("/api/products/corporate");
        const corporatedata = await response.json();
        setCorporateProducts(shuffleArray(corporatedata));
      } catch (error) {
        console.error("Error fetching product corporate wears:", error);
      }
    };

    const fetchSummerData = async () => {
      try {
        const response = await fetch("/api/products/two-piece");
        const summerdata = await response.json();
        setSummerProducts(shuffleArray(summerdata));
      } catch (error) {
        console.error("Error fetching product two-piece wears:", error);
      }
    };

    fetchTeesData();
    fetchShirtsData();
    fetchTradData();
    fetchCorporateData();
    fetchSummerData();
  }, []);

  return (
    <>
      <Box maxWidth="xl" className="mb-5 mx-auto">
        <Box className="collection mx-auto">
          <Box className="abt-desc">
            <Typography variant="h6" className="font-extrabold text-goldie">
              S R LUXURIES
            </Typography>
            <Typography
              variant="h2"
              className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0"
            >
              Collection
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ====== TEES ====== */}
      <Box className="container">
        <Box className="justify-center mb-5 p-4 mt-10">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4"
            >
              <span>
                <Link href="/tees">
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </span>
              <Link
                href="/tees"
                className="animate__animated animate__flash animate__delay-10s"
              >
                {" "}
                SRL Tees
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
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

      {/* ====== SHIRTS ====== */}
      <Box className="container">
        <Box className="justify-center mb-5 p-4 mt-10">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4"
            >
              <span>
                <Link href="trad-wears">
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </span>
              <Link
                href="/trad-wears"
                className="animate__animated animate__flash animate__delay-7s"
              >
                {" "}
                Casual Shirts
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
      >
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

      {/* ====== TRADS ====== */}
      <Box className="container">
        <Box className="justify-center mb-5 p-4 mt-10">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4"
            >
              <span>
                <Link href="trad-wears">
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </span>
              <Link
                href="/trad-wears"
                className="animate__animated animate__flash animate__delay-2s"
              >
                {" "}
                Trads
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
      >
        {tradProducts.map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.productImage}
            hoverImageSrc={product.productHoverImage}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </Box>

      {/* ====== CORPORATE ====== */}
      <Box className="container">
        <Box className="justify-center mb-5 p-4 mt-10">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4"
            >
              <span>
                <Link href="/corporate-wears">
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </span>
              <Link
                href="/corporate-wears"
                className="animate__animated animate__flash animate__delay-5s"
              >
                {" "}
                Corporate
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
      >
        {corporateProducts.map((product, index) => (
          <ProductCatCard
            key={index}
            normalImageSrc={product.productImage}
            hoverImageSrc={product.productHoverImage}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </Box>

      {/* ====== SUMMER ====== */}
      <Box className="container">
        <Box className="justify-center mb-5 p-4 mt-10">
          <Box maxWidth="xl" className="text-center">
            <Typography
              variant="h2"
              className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4"
            >
              <span>
                <Link href="/two-piece">
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
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </Link>
              </span>
              <Link
                href="/two-piece"
                className="animate__animated animate__flash animate__delay-10s"
              >
                2-Catchy Piece
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="xl"
        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-2 mb-5"
      >
        {summerProducts.map((product, index) => (
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
