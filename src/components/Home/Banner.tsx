import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
export const Banner = () => {
  return (
    <Box maxWidth="xl">
      <Box className="banner mx-auto ">
        <Box className="banner-desc">
          <Typography variant="h6" className="font-extrabold text-goldie">sr luxuries</Typography>
          <Typography variant="h2" className="text-5xl text-white font-extrabold mb-10 w-1/4 mt-0 gold_title">Better when it&apos;s on you. </Typography>
          <Link href="/collection">
            <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-6 py-2 text-sm hover:bg-tan hover:text-white border border-goldie
              hover:border-tan">VIEW COLLECTION</Button>
          </Link>
        </Box> 
      </Box>
    </Box>
  );
}

