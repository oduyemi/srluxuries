import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Location } from "@/components/Location/index";

export default function Locator () {
    return(
        <>
            <section>
                <Header />
            </section>
            <Location />
            <section>
                <Footer />
            </section>
        </>  
    )
}