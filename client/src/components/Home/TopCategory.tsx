import React from "react";
import Link from "next/link";

export const TopCategory = () => {
    return(
        <div className="cta-area">
            <div className="container">
                <div className="w-full flex items-center justify-content">
                    <div className="flex items-center justify-content cta-content bg-img background-overlay"></div>
                        <div className="h-100 flex items-center justify-center">
                            <div className="cta--text mr-10">
                                <h6 className="text-l text-butter">Custom Designs</h6>
                                <h3 className="text-tan font-bold text-5xl">Tailored-To-Fit</h3>
                                <div className="my-4">
                                <button className="rounded-full bg-goldie px-8 py-2 text-l hover:bg-tan hover:text-white border border-goldie
                                    hover:border-tan"><Link href="/services">Order Now</Link></button>
                                </div>
                                
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}