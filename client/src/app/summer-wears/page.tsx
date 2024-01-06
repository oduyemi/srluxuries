import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Summer } from "@/components/Wears/Summer";
import { Box } from "@mui/material";

export default function SummerWears () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Summer />
            </Box>
            <Box>
                <Footer openModal={openModal} />
            </Box>
        </>
        
    )
}