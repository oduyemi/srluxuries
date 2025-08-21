import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Corporate } from "@/components/Wears/Corporate";
import { Box } from "@mui/material";


export default function CorporateWears () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Corporate />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
        
    )
}