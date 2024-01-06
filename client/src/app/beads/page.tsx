import { BeadsPage } from "@/components/BeadsPage/index"
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export default function Beads () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <BeadsPage />
            </section>
            <section>
                <Footer openModal={openModal} />
            </section>
        </>
    )
}
