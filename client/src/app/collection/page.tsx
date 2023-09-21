import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { CollectionPage } from "@/components/CollectionPage/index"

export default function collection () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <CollectionPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
        
    )
}