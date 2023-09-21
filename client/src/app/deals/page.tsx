import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Promotions } from "@/components/Promotions/index";


export default function Faqs () {
    return(
        <>
            <section>
                <Header />
            </section>
            <Promotions />
            <section>
                <Footer />
            </section>
        </>
    )
}