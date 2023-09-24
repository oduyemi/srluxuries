import Link from "next/link";
import Image from "next/image";

export const Tailor = () => {
  return (
    <>
        <section className="h-full w-full mb-5 mx-auto">
                <div className="serv mx-auto ">
                    <div className="abt-desc">
                        <h6 className="font-extrabold">services</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-butter w-1/3 mb-4">Tailored-To-Fit<span><h2 className="pl-2 text-[#39A9DB]">D E S I G N S</h2></span></h2>
                        <p className="text-sm pl-1 w-1/4">
                            SR Luxuries Consultancy presents an Avenue for our customers to upload
                            their preferred designs and measurements. Our tailored to fit gives an
                            opportunity to present your imaginary designs and our expert tailors
                            will produce high quality and luxury pieces bringing your designs
                            to limelight. 
                        </p>
                        <div className="mt-5">
                            <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white
                                text-black border border-goldie hover:border-tan"> 
                                <Link href="/login">Upload Your Style Image</Link>
                            </button>
                        </div>
                        </div> 
                    </div>
        </section>
        <section className="mx-auto">
            <div className="container mb-0 pt-5 pt-lg-6">
            <div className="container mb-0">
            <div className="flex flex-col mb-5 md:flex-row">
                <div className="w-2/3 mx-auto mt-5">
                    <h2 className="text-center text-5xl text-third-color text-tan">
                    <strong className="text-goldie">S R LUXURIES </strong>serves the best...{" "}
                    </h2>
                </div>
                </div>

                {/* Consultancy */}
                <section>
                <div className="flex items-center justify-center mb-5 consult">
                <div className="w-full md:w-1/2 order-2 md:order-1 mb-5 md:mb-0">
                    <div className="h-100 flex items-center justify-center">
                    <div className="w-full md:w-3/4 mx-auto md:ml-0">
                        <Image
                            src="/assets/images/consultancy.png"
                            alt="Consultancy collage"
                            width={602}
                            height={660}
                            className="object-cover w-800 h-660 ml-4"
                        />
                        
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2 mb-5 md:mb-0 md:ml-4">
                    <div className="h-100 flex items-center">
                    <div className="ml-0 md:ml-4 mr-4">
                        <h2 className="mb-4 text-goldie text-3xl">
                        CONSULTANCY
                        </h2>
                        <p className="mb-5 w-2/3">
                            S R LUXURIES&quot; consultancy has grown into a highly personalized experience...
                        </p>
                        <p className="mb-5 w-2/3">
                            <strong>
                                Do you need expert advice on your project or occasion? Book an appointment today.
                            </strong>
                        </p>
                        <div className="flex">
                        <button className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white
                            border border-goldie hover:border-tan"> 
                            <Link href="/appointment">Book Appointment</Link>
                        </button>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </section>
            </div>
            </div>
      </section>
    </>
  );
};
