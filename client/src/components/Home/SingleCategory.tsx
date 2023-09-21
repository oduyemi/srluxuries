import React from "react";
import Link from "next/link";

export const SingleCategory = () => {
    return(
        <div className="my-10 section-padding-80 clearfix">
            <div className="container w-2/3 mx-auto">
                <div className="flex items-center justify-between mx-auto space-x-6">
                    {/* Single category */}
                    <div className="single-cat single-cat-1 flex items-center justify-center space-x-4 bg-img">
                        <div className="cat-content">
                            <Link href="/collection">SR Designs</Link>
                        </div>
                    </div>
                    {/* Single category */}
                    <div className="single-cat single-cat-2 flex items-center justify-center bg-img">
                        <div className="cat-content">
                            <Link href="/foot">Footwears</Link>
                        </div>
                    </div>
                    {/* Single category */}
                    <div className="single-cat single-cat-3 flex items-center justify-center bg-img">
                        <div className="cat-content">
                            <Link href="/accessories">Accessories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}