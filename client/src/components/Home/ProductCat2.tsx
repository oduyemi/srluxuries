import Link from "next/link";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "./ProductCatCard";
import "animate.css";

export const ProductCat2 = () => {
    return(
        <>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className="gold_title text-gray-50 font-extrabold md:text-9xl sm:text-6xl mt-0 mb-4">
                            <span><Link href="/foot">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/foot" className="animate__animated animate__flash animate__delay-8s"> footwears</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-1.jpg"
                    // productName="Product Name 1"
                    // price="149"
                    // originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-2.jpg"
                    // productName="Product Name 2"
                    // price="149"
                    // originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/footwears/shoe-3.jpg"
                    // productName="Product Name 3"
                    // price="149"
                    // originalPrice="199"
                />
            </Box>
        </>
    )
}