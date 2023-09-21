import Link from "next/link";

export const Promotions = () => {
    return(
        <>
            <section className="h-full w-full mb-5">
                <div className="serv deals mx-auto">
                    <div className="abt-desc">
                        <h6 className="font-extrabold my-2 text-tan">promotions</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-butter w-1/3">
                            SRL<span>
                                    <h2 className="pl-2 text-[#39A9DB] inline">&nbsp;Specials</h2>
                                </span>
                        </h2>
                        <p className="text-sm pl-2 text-tan">
                            Don&apos;t miss out on another good deal.
                        </p>
                        <div className="mt-4">
                        <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white
                            border border-goldie hover:border-tan"> 
                            <Link href="/shop">Shop Now</Link>
                        </button>
                        </div>
                        </div> 
                    </div>
            </section>
            <section>
                
            </section>
        </>
    )
}