import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { StonesPage } from "@/components/StonesPage/index";
import { Box } from "@mui/material";


export default function Stones () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <StonesPage />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
        
    )
}