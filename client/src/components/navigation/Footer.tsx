import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  return (
    <footer className="relative bg-tan pt-8 pb-6">
        <Box className="container mx-auto px-4">
            <Box className="flex flex-wrap text-left lg:text-left">
            <Box className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl fonat-semibold text-butter">Let&apos;s keep in touch!</h4>
                <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms, we respond fast.
                </h5>
                <Box className="mt-6 lg:mb-0 mb-6">
                    <Link href="https://www.twitter.com/srluxuries">
                        <button className="bg-white text-bluey shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                            <i>{TwitterIcon}</i>
                    </button>
                    </Link>
                    {/* <Link href="" className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                        <i className="fab fa-facebook-square"></i>
                    </Link> */}
                    <Link href="https://www.instagram.com/sr_luxuries/">
                        <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                            <i className="fab fa-instagram-square"></i>
                        </button>
                    </Link>
                    <button className="bg-white text-butter shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                    <i className="fab fa-github"></i>
                </button>
                </Box>
            </Box>
            <Box className="w-full lg:w-6/12 px-4">
                <Box className="flex flex-wrap items-top mb-6">
                <Box className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                    <li>
                        <Link className="text-blueGray-600 hover:text-butter font-semibold block pb-2 text-sm" href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/accesories">Accesories</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/collections">Collections</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    </ul>
                </Box>
                <Box className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/services">Services</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/appointment">Book Appointment</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link className="text-blueGray-600 hover:text-white font-semibold block pb-2 text-sm" href="/locator">Contact Us</Link>
                    </li>
                    </ul>
                </Box>
                </Box>
            </Box>
            </Box>
            <hr className="my-6 border-goldie" />
            <Box className="flex flex-wrap items-center md:justify-between justify-center">
            <Box className="w-full md:w-4/12 px-4 mx-auto text-center">
                <Box className="text-sm text-subtext font-semibold py-1">
                Copyright &copy; Samuel Rowland Luxuries | All rights reserved.
                </Box>
            </Box>
            </Box>
        </Box>
    </footer>
  );
};