"use client";
import { useState, useEffect} from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "./ProductCatCard";
import "animate.css";

interface Products{
    ProductName: string;
    Price: number;
    ProductImage: string;
    ProductHoverImage: string;
}

export const ProductCat1 = () => {
    const [tradProducts, setTradProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://api.srl.yemi.dev/products/trad");
            const data = await response.json();
            setTradProducts(data);
          } catch (error) {
            console.error('Error fetching product trad:', error);
          }
        };
    
        fetchData();
    }, []);

      const content = (
        <Box
          maxWidth="xl"
          className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5"
        >
          {tradProducts.slice(0, 3).map((product, index) => (
            <ProductCatCard
              key={index}
              normalImageSrc={product.ProductImage}
              hoverImageSrc={product.ProductHoverImage}
              productName={product.ProductName}
              price={product.Price}
            />
          ))}
        </Box>
      );
    
      return (
        <>
          <Box>
            <Box className="container">
              <Box className="justify-center mb-5 p-4">
                <Box maxWidth="xl" className="text-center">
                  <Typography
                    variant="h2"
                    className="gold_title text-gray-50 font-extrabold md:text-9xl sm:text-6xl mt-0 mb-4"
                  >
                    <span>
                      <Link href="/foot">
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
                    <Link href="/foot" className="animate__animated animate__flash animate__delay-8s">
                      {" "}
                      collection
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {content}
        </>
      );
    };