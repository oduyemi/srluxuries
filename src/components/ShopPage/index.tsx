"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
    productName: string;
    price: number;
    productImage: string;
    productHoverImage: string;
  }




export const ShopPage = () => {
    const [teesProducts, setTeesProducts] = useState<Products[]>([]);
    const [shirtsProducts, setShirtsProducts] = useState<Products[]>([]);
    const [tradProducts, setTradProducts] = useState<Products[]>([]);
    const [corporateProducts, setCorporateProducts] = useState<Products[]>([]);
    const [summerProducts, setSummerProducts] = useState<Products[]>([]);
    const [footProducts, setFootProducts] = useState<Products[]>([]);
    const [beadsProducts, setBeadsProducts] = useState<Products[]>([]);
    const [beltsProducts, setBeltsProducts] = useState<Products[]>([]);
    const [capsProducts, setCapsProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchTeesData = async () => {
          try {
            const response = await fetch("https://api.srl.yemi.dev/products/tees");
            const teesdata = await response.json();
            setTeesProducts(teesdata);
          } catch (error) {
            console.error('Error fetching product tees:', error);
          }
        };
    
        const fetchShirtsData = async () => {
          try {
            const response = await fetch("https://api.srl.yemi.dev/products/shirts");
            const shirtsdata = await response.json();
            setShirtsProducts(shirtsdata);
          } catch (error) {
            console.error('Error fetching product shirts:', error);
          }
        };
    
        const fetchTradData = async () => {
          try {
            const response = await fetch("/api/products/trad");
            const traddata = await response.json();
            setTradProducts(traddata);
          } catch (error) {
            console.error('Error fetching product trad:', error);
          }
        };
        
        const fetchCorporateData = async () => {
          try {
            const response = await fetch("/api/products/corporate");
            const corporatedata = await response.json();
            setCorporateProducts(corporatedata);
          } catch (error) {
            console.error('Error fetching product corporate:', error);
          }
        };
    
        const fetchSummerData = async () => {
          try {
            const response = await fetch("/api/products/two-piece");
            const summerdata = await response.json();
            setSummerProducts(summerdata);
          } catch (error) {
            console.error('Error fetching product summer:', error);
          }
        };
    
        const fetchFootData = async () => {
          try {
            const response = await fetch("/api/products/footwears");
            const footdata = await response.json();
            setFootProducts(footdata);
          } catch (error) {
            console.error('Error fetching product footwear:', error);
          }
        };
        const fetchBeadsData = async () => {
          try {
            const response = await fetch("/api/products/beads");
            const beadsdata = await response.json();
            setBeadsProducts(beadsdata);
          } catch (error) {
            console.error('Error fetching product beads:', error);
          }
        };
    
        const fetchBeltsData = async () => {
          try {
            const response = await fetch("/api/products/belts");
            const beltsdata = await response.json();
            setBeltsProducts(beltsdata);
          } catch (error) {
            console.error('Error fetching product belts:', error);
          }
        };
    
        const fetchCapsData = async () => {
          try {
            const response = await fetch("/api/products/caps");
            const capsdata = await response.json();
            setCapsProducts(capsdata);
          } catch (error) {
            console.error('Error fetching product caps:', error);
          }
        };

        fetchTeesData();
        fetchShirtsData();
        fetchTradData();
        fetchCorporateData();
        fetchSummerData();
        fetchFootData();
        fetchBeadsData();
        fetchBeltsData();
        fetchCapsData();

      }, []);

    return(
        <>
             <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto" id="store">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4 mt-0">Shop</Typography>
                        </Box> 
                    </Box>
                </Box>
             <Box>
             <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/tees">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/tees" className="animate__animated animate__flash animate__delay-10s"> SRL Tee&apos;s</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
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
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="trad-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/trad-wears" className="animate__animated animate__flash animate__delay-7s"> Casual Shirts</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
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
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/trad-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/trad-wears" className="animate__animated animate__flash animate__delay-10s"> Trads</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
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
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/corporate-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/corporate-wears" className="animate__animated animate__flash animate__delay-10s"> Corporate</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
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
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/summer-wears">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/summer-wears" className="animate__animated animate__flash animate__delay-10s"> 2-Catchy Piece</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
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
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/foot">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/foot" className="animate__animated animate__flash animate__delay-8s"> footwears</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {footProducts.map((product, index) => (
                    <ProductCatCard
                    key={index}
                    normalImageSrc={product.productImage}  
                    hoverImageSrc={product.productHoverImage}  
                    productName={product.productName}  
                    price={product.price} 
                    />
                ))}
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/beads">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/beads" className="animate__animated animate__flash animate__delay-10s"> Beads</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {beadsProducts.map((product, index) => (
                    <ProductCatCard
                    key={index}
                    normalImageSrc={product.productImage}  
                    hoverImageSrc={product.productHoverImage}  
                    productName={product.productName}  
                    price={product.price} 
                    />
                ))}
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className="text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/belts">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/belts" className="animate__animated animate__flash animate__delay-10s"> Belts</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {beltsProducts.map((product, index) => (
                    <ProductCatCard
                    key={index}
                    normalImageSrc={product.productImage}  
                    hoverImageSrc={product.productHoverImage}  
                    productName={product.productName}  
                    price={product.price} 
                    />
                ))}
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold md:text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/caps">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/caps" className="animate__animated animate__flash animate__delay-10s"> Caps</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {capsProducts.map((product, index) => (
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
    )
} 