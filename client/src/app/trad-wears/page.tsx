import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Trad } from "@/components/Wears/Trad";

export default function TradWears () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <Trad />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}