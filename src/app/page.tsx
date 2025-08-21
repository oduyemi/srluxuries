import { Header } from "@/components/navigation/Header";
import { Banner } from "@/components/Home/Banner";
import { TopCategory } from "@/components/Home/TopCategory";
import { Brands } from "@/components/Home/Brands";
import { Footer } from "@/components/navigation/Footer";
import { ProductCat1 } from "@/components/Home/ProductCat1";
import { ProductCat2 } from "@/components/Home/ProductCat2";
import { ProductCat3 } from "@/components/Home/ProductCat3";
import { Promotions } from "@/components/Promotions/index";
import { Box } from "@mui/material";



export default function Home() {
  return (
    <main className="">
      <Box>
        <Banner />
      </Box>
      <Box>
        <ProductCat1 />
      </Box>
      <Box className="my-8">
        <TopCategory />
      </Box>
      <ProductCat2 />
      <Box className="my-8">
        <Promotions />
      </Box>
      <ProductCat3 />
      <Box className="my-8">
        <Brands />
      </Box>
    </main>
  );
}
