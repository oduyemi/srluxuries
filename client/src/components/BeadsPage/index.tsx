"use client"
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import ProductCatCard from "../Home/ProductCatCard";

export const BeadsPage = () => {

    return(
        <>
            <Box className="h-full w-full mb-5 mx-auto">
                <Box className="collection mx-auto" id="beads">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Luxury Beads</Typography>
                        </Box> 
                    </Box>
                </Box>
                <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-1.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-2.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-3.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-4b.jpg"
                />
            </Box>
            <Box className="mt-6">
                <Box className="my-6 mx-auto text-center">
                    <Link href="/stones">
                        <Button sx={{ backgroundColor:"#CD8F2C" }} variant="contained" className="rounded hover:bg-tan px-8 py-2 text-l  hover:text-white border border-goldie
                        hover:border-tan">Go to Luxury Stones</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}
