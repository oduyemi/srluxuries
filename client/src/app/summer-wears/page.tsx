import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Summer } from "@/components/Wears/Summer";

export default function SummerWears () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <Summer />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}