import { Header } from "@/components/navigation/Header";
import { Appointment } from "@/components/Forms/Forms";
import { Box } from "@mui/material";



export default function Appoint () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Appointment />
            </Box>
        </>
    )
}