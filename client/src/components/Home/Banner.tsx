import React from "react";
import Link from "next/link";
export const Banner = () => {
  return (
    <section className="h-full w-full">
      <div className="banner mx-auto ">
        <div className="banner-desc">
        <h6 className="font-extrabold text-goldie">sr luxuries</h6>
        <h2 className="text-5xl text-white font-extrabold mb-10 w-1/4 mt-0">Better when it&apos;s on you. </h2>
        <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white border border-goldie
        hover:border-tan"><Link href="/collection">VIEW COLLECTION</Link></button>
        </div> 
      </div>
    </section>
  );
}

