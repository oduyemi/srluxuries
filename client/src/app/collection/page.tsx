import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CollectionPage } from "@/components/CollectionPage/index"
import { Box } from "@mui/material";


export default function Collection () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <CollectionPage />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
        
    )
}