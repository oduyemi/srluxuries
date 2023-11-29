"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";





export const Header = () => {
    const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleShopDropdown = () => {
        setIsShopDropdownOpen(!isShopDropdownOpen);
    };
    
    const togglePagesDropdown = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      };

      const renderMobileMenu = () => {
        if (isMobileMenuOpen) {
          return (
            <Box className="md:hidden">
              <Link href="/" className="text-l block py-2 hover:text-butter">
                Home
              </Link>
              <Link href="/about" className="text-l block py-2 hover:text-butter">
                About
              </Link>
              <Link href="/collection" className="text-l block py-2 hover:text-butter">Collection&apos;</Link>
              <Link href="/tees" className="text-l block py-2 hover:text-butter">SRL Tees&apos;</Link>
              <Link href="/belts" className="text-l block py-2 hover:text-butter">
                Belts
              </Link>
              <Link href="/caps" className="text-l block py-2 hover:text-butter">
                Caps
              </Link>
              <Link href="/foot" className="text-l block py-2 hover:text-butter">
                Footwears
              </Link>
              <Link href="/beads" className="text-l block py-2 hover:text-butter">
                Luxury Beads
              </Link>
              {/* <Link href="/stones" className="text-l block py-2 hover:text-butter">
                Luxury Stones
              </Link> */}
              <Link href="/tees" className="text-l block py-2 hover:text-butter">
                SRL Tees
              </Link>
              <Link href="/shirts" className="text-l block py-2 hover:text-butter">
                Casual Shirts
              </Link>
              <Link href="/corporate-wears" className="text-l block py-2 hover:text-butter">
                Corporate Wears
              </Link>
              <Link href="/aummer-wears" className="text-l block py-2 hover:text-butter">
                SRL 2 Catchy Piece
              </Link>
              <Link href="/trad-wears" className="text-l block py-2 hover:text-butter">
                Trad Wears
              </Link>
              <Link href="/services" className="text-l block py-2 hover:text-butter">
                Services
              </Link>
              <Link
                href="/locator"
                className="text-l block py-2 hover:text-butter"
              >
                Contact Us
              </Link>
            </Box>
          );
        }
        return null;
      };
      
    return(
        <nav id="header" className="bg-transparent">
                <Box maxWidth="xl" sx={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"between"}} className=" mt-0 py-1">
                    <Box maxWidth="sm" sx={{ display:"flex alignItems:center"}} className="logo-wrapper pl-11">
                        <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={50}
                            height={50}
                            className="h-14 w-14 object-contain ml-4 logo"
                        />
                        </Link>
                    </Box>
                    <Box maxWidth="l" className="mobile-menu-button md:hidden">
                        <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
                            <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http:www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                        {renderMobileMenu()}
                    </Box>
               <ul
                 className="nav-menu-wrapper flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium" id="mobile-menu">
                    <li>
                        <Link
                            href="/"
                            className={`${
                                typeof window !== 'undefined' && window.location.pathname === '/'
                                    ? 'bg-butter text-white'
                                    : 'text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0'
                            } block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none`}
                            aria-current="page"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">About</Link>
                    </li>
                    <li>
                        <button onClick={toggleShopDropdown} data-dropdown-toggle="dropdownNavbar"
                            className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-butter md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Accessories
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                            <Box 
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
                                    {/* <li>
                                        <Link href="/stones" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Luxury Stones</Link>
                                    </li> */}
                                </ul> 
                            </Box>                                           
                    </li>
                    <li>
                        <button onClick={togglePagesDropdown} data-dropdown-toggle="dropdownNavbar"
                            className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-butter md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Wears
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                            <Box
                             className={`${
                                isPagesDropdownOpen ? "block" : "hidden"
                            } bg-transparent text-base z-10 list-none rounded shadow absolute mt-2 w-36 left-30`}>
                                <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                                    <li>
                                        <Link href="/tees" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">SRL Tees</Link>
                                    </li>
                                    <li>
                                        <Link href="summer-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">SRL 2 Catchy Piece</Link>
                                    </li>
                                    <li>
                                    <Link href="/shirts" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Casual Shirts</Link>
                                    </li>
                                    <li>
                                        <Link href="corporate-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Corporate Wears</Link>
                                    </li>
                                    <li>
                                        <Link href="trad-wears" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Trad Wears</Link>
                                    </li>
                                </ul>
                        </Box>
                    </li>
                    {/* <li>
                        <Link href="" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0"> Fit</Link>
                    </li> */}
                    <li>
                        <Link href="/services" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Services</Link>
                    </li> 
                    <li>
                    <Link href="locator" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-butter md:p-0">Contact Us</Link>
                    </li>
                </ul>
                <Box maxWidth="sm" sx={{ display:"flex", alignItems:"center", justifyContent:"center"}} className="space-x-2 menu-icons">
                    <Box className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/shop">
                            <Image
                                src="/assets/images/svg/cart-outline.svg"
                                alt="Profile"
                                width={8}
                                height={8}
                                className="h-6 w-6 object-contain"
                            />
                        </Link>
                    </Box>
                   
                    <Box className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/login">
                            <Image
                                src="/assets/images/svg/person-outline.svg"
                                alt="Profile"
                                width={8}
                                height={8}
                                className="h-6 w-6 object-contain"
                            />
                        </Link>
                    </Box>
                </Box>
            </Box>
        </nav>
        );
    };

