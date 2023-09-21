"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";



export const Header = () => {
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };

    const togglePagesDropdown = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };
    return(
        <nav id="header" className="bg-transparent">
            <div className="w-full container flex flex-wrap items-center justify-between mt-0 py-1">
                <div className="logo-wrapper pl-11 flex items-center">
                <Link href="/">
                    <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="h-14 w-14 object-contain ml-4"
                    />
                </Link>  
                </div>
                <ul className="nav-menu-wrapper flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium">
                    <li>
                        <Link href="/" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-goldie md:p-0 rounded focus:outline-none"
                            aria-current="page">Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">About</Link>
                    </li>
                    <li>
                        <button onClick={toggleShopDropdown} data-dropdown-toggle="dropdownNavbar"
                            className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-butter md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Accessories
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                            <div 
                                className={`${
                                    isShopDropdownOpen ? "block" : "hidden"
                                } bg-transparent text-base z-10 list-none rounded shadow absolute mt-2 w-36 left-30`}>
                                <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                                    <li>
                                        <Link href="/belts" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Belts</Link>
                                    </li>
                                    <li>
                                    <Link href="/caps" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Caps</Link>
                                    </li>
                                    <li>
                                        <Link href="/foot" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Footwears</Link>
                                    </li>
                                    <li>
                                        <Link href="/beads" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Luxury Beads</Link>
                                    </li>
                                    <li>
                                        <Link href="/stones" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Luxury Stones</Link>
                                    </li>
                                </ul> 
                            </div>                                           
                    </li>
                    <li>
                        <button onClick={togglePagesDropdown} data-dropdown-toggle="dropdownNavbar"
                            className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-butter md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Wears
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                            <div
                             className={`${
                                isPagesDropdownOpen ? "block" : "hidden"
                            } bg-transparent text-base z-10 list-none rounded shadow absolute mt-2 w-36 left-30`}>
                                <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                                <li>
                                        <Link href="corporate-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Corporate Wears</Link>
                                    </li>
                                    <li>
                                        <Link href="summer-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Summer Wears</Link>
                                    </li>
                                    <li>
                                        <Link href="trad-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Trad Wears</Link>
                                    </li>

                                    {/* <li>
                                        <Link href="/faq" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Services</Link>
                                    </li> */}
                                </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Wedding Fit</Link>
                    </li>
                   
                    <li>
                    {/* <Link href="/deals" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Deals</Link> */}
                    </li>
                    <li>
                    <Link href="locator" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Contact Us</Link>
                    </li>
                </ul>

                <div className="flex items-center justify-between space-x-2">
                    {/* <div className="">
                        <form>
                            <label htmlFor="SearchInquiry" className=""> </label>
                            <input type="search" className="px-2 py-1 h-8 border border-solid  border-butter rounded-full text-sm leading-snug text-tan shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-butter" placeholder="&emsp;Search for products" />
                        </form>
                    </div> */}

                    <div className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/shop">
                            <Image
                                src="/assets/images/svg/cart-outline.svg"
                                alt="Profile"
                                width={10}
                                height={10}
                                className="h-8 w-8 object-contain"
                            />
                        </Link>
                    </div>
                   
                    <div className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/login">
                            <Image
                                src="/assets/images/svg/person-outline.svg"
                                alt="Profile"
                                width={10}
                                height={10}
                                className="h-8 w-8 object-contain"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        )
    }
