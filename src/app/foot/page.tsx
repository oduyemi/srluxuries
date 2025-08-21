import { FootwearsPage } from "@/components/Footwears/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";


export default function Foot () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <FootwearsPage />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

