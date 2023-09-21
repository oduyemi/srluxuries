import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BeltsPage } from "@/components/BeltsPage/index";

export default function Belts () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <BeltsPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}