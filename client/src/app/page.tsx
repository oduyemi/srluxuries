import Modal from 'react-modal';
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

Modal.setAppElement('#root');

export default function Home() {
  return (
    <main className="">
      <Box>
        <Header />
        <Banner />
      </Box>
      <Box>
        <ProductCat1 />
      </Box>
      <Box className="my-8">
        <TopCategory />
      </Box>
        <ProductCat2 />
      <Box>
      </Box>
      <Box className="my-8">
        <Promotions />
      </Box>
        <ProductCat3 />
      <Box>
      </Box>
      <Box className="my-8">
        <Brands />
      </Box>
      <Box>
        <Footer />
      </Box>
    </main>
  )
}
