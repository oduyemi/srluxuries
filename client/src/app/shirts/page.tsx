import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Shirts } from "@/components/Wears/Shirts";
import { Box } from "@mui/material";

export default function SummerWears () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Shirts />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
        
    )
}