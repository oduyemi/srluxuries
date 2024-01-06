import { Reg3 } from "@/components/Forms/Forms";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";



export default function Register3 () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Reg3 />
            </Box>
            <Box>
                <Footer openModal={openModal} />
            </Box>
        </>
       
    )
}