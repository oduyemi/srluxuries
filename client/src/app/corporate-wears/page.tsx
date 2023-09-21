import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Corporate } from "@/components/Wears/Corporate";

export default function CorporateWears () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <Corporate />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}