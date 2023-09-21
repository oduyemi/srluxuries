import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { StonesPage } from "@/components/StonesPage/index";

export default function Stones () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <StonesPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}