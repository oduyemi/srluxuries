import Image from "next/image";
import Link from "next/link";

export const AboutPage = () => {
    return(
        <>
            <section className="h-full w-full">
                <div className="abt mx-auto ">
                    <div className="abt-desc">
                        <h6 className="font-extrabold">about</h6>
                        <h2 className="text-4xl font-extrabold mb-2 text-butter w-1/3 mt-0">
                            Samuel Rowland
                            <span><h2 className="text-[#39A9DB]">&nbsp;L U X U R I E S </h2></span>
                        </h2>
                        <p className="text-sm pl-2">
                            It&apos;s not just the outfit. We build dreams.
                        </p>
                        </div> 
                    </div>
            </section>
            <section className="my-4">
                <div className="">
                    <div className="w-full md:w-2/3 my-5 mx-auto">
                        <div className="md:ms-5 my-3"> 
                        <p className="text-2xl font-light">
                            SR Luxuries was created out to the niche to provide affordable luxury with a true style indulgence showing <span><h2 className="text-bluey inline">the authentic YOU</h2>.</span><br /><br />
                            Our designes are inspired by the latest fashion trends and tailored to fit your individual style.
                            Join us on this fashionable journey and let us make a statement together.<br /> <br />
                            SR Luxuries is a fashion brand that creates bespoke menswear producing high quality, luxury pieces with exceptional craftsmanship and tailoring. We offer tailored garments, ready to wear pieces and corporate wears.
                            <br /> <br />
                            We believe that accessories accentuates your outlook providing you a complete and unique style.
                            Our available accessories are footwears, belt,  traditional caps, luxury beads and luxury stones.
                        </p> 
                           
                        </div>
                    </div>
                    
                </div>
            </section>
        </>       
    )
}