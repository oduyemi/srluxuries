import React from "react";
import Link from "next/link";

export const TopCategory = () => {
    return(
        <div className="cta-area">
            <div className="container">
                <div className="w-full">
                    <div className="cta-content bg-img background-overlay">
                        <div className="h-100 flex items-center justify-end">
                            <div className="cta--text">
                                <h6 className="mt-14 text-l pl-8">Custom Designs</h6>
                                <h3 className="text-tan font-bold text-5xl mt-4 mb-6">Tailored-To-Fit</h3>
                                <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white ms-10
                                border border-goldie hover:border-tan"><Link href="/services" className="">Order Now</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}