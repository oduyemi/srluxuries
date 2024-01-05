import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative bg-tan pt-8 pb-6">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-butter">Let&apos;s keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-white-600">
                Find us on any of these platforms, we respond fast.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                    <Link href="" className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="" className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                        <i className="fab fa-facebook-square"></i>
                    </Link>
                    <Link href="" className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                        <i className="fab fa-mail"></i>
                    </Link>
                    <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-github"></i>
                </button>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Navigation Links</span>
                    <ul className="list-unstyled">
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/accesories">Accesories</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/collections">Collections</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/appointment">Book Appointment</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/locator">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright &copy; Samuel Rowland Luxuries | All rights reserved.
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
};