"use client"
import React, { useEffect, useState} from "react";
import Link from "next/link";
import ProductCatCard from "../Home/ProductCatCard";

export const BeadsPage = () => {

    return(
        <>
            <section className="h-full w-full mb-5 mx-auto">
                <div className="collection mx-auto" id="beads">
                    <div className="abt-desc">
                        <h6 className="font-extrabold text-goldie">S R LUXURIES</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4 mt-0">Luxury Beads</h2>
                        </div> 
                    </div>
                </section>
                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-1.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-2.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/beads/bd-3jpg"
                />
            </section>
            <section className="mt-6">
                <div className="my-6 mx-auto text-center">
                    <button className="rounded-full bg-goldie px-8 py-2 text-l hover:bg-tan hover:text-white border border-goldie
                    hover:border-tan"><Link href="/stones">Go to Luxury Stones</Link></button>
                </div>
            </section>
        </>
    )
}
