import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BeltsPage } from "@/components/BeltsPage/index";
import { Box } from "@mui/material";


export default function Belts () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <BeltsPage />
            </Box>
            <Box>
                <Footer openModal={openModal} />
            </Box>
        </>
        
    )
}