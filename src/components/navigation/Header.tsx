"use client";
import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shopRef = useRef<HTMLLIElement>(null);
  const pagesRef = useRef<HTMLLIElement>(null);

  const pathname = usePathname();

  const toggleShopDropdown = () => setIsShopDropdownOpen(!isShopDropdownOpen);
  const togglePagesDropdown = () => setIsPagesDropdownOpen(!isPagesDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path: string) =>
    pathname === path ? "bg-butter text-goldie" : "text-gray-700 hover:text-butter";

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        shopRef.current &&
        !shopRef.current.contains(event.target as Node) &&
        pagesRef.current &&
        !pagesRef.current.contains(event.target as Node)
      ) {
        setIsShopDropdownOpen(false);
        setIsPagesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderMobileMenu = () =>
    isMobileMenuOpen ? (
      <Box className="md:hidden px-4 space-y-2">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/collection", label: "Collection" },
          { href: "/tees", label: "SRL Tees" },
          { href: "/belts", label: "Belts" },
          { href: "/caps", label: "Caps" },
          { href: "/foot", label: "Footwears" },
          { href: "/beads", label: "Luxury Beads" },
          { href: "/shirts", label: "Casual Shirts" },
          { href: "/corporate-wears", label: "Corporate Wears" },
          { href: "/two-piece", label: "SRL 2 Catchy Piece" },
          { href: "/trad-wears", label: "Trad Wears" },
          { href: "/services", label: "Services" },
          { href: "/locator", label: "Contact Us" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block py-2 ${isActive(link.href)}`}
          >
            {link.label}
          </Link>
        ))}
      </Box>
    ) : null;

  return (
    <nav id="header" className="bg-transparent">
      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="py-2 px-4"
      >
        {/* Logo */}
        <Box className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
          </Link>
        </Box>

        {/* Mobile Menu Button */}
        <Box className="md:hidden">
          <button
            className="text-gray-700 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:space-x-6 md:text-base font-medium">
          <li>
            <Link href="/" className={`block py-2 ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 ${isActive("/about")}`}>
              About
            </Link>
          </li>

          {/* Accessories Dropdown */}
          <li className="relative" ref={shopRef}>
            <button
              onClick={toggleShopDropdown}
              className="flex items-center py-2 hover:text-butter"
            >
              Accessories
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isShopDropdownOpen && (
              <Box className="absolute mt-2 w-40 bg-white shadow rounded z-10">
                <ul>
                  <li>
                    <Link href="/belts" className="block px-4 py-2 hover:bg-gray-100">
                      Belts
                    </Link>
                  </li>
                  <li>
                    <Link href="/caps" className="block px-4 py-2 hover:bg-gray-100">
                      Caps
                    </Link>
                  </li>
                  <li>
                    <Link href="/foot" className="block px-4 py-2 hover:bg-gray-100">
                      Footwears
                    </Link>
                  </li>
                  <li>
                    <Link href="/beads" className="block px-4 py-2 hover:bg-gray-100">
                      Luxury Beads
                    </Link>
                  </li>
                </ul>
              </Box>
            )}
          </li>

          {/* Wears Dropdown */}
          <li className="relative" ref={pagesRef}>
            <button
              onClick={togglePagesDropdown}
              className="flex items-center py-2 hover:text-butter"
            >
              Wears
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPagesDropdownOpen && (
              <Box className="absolute mt-2 w-48 bg-white shadow rounded z-10">
                <ul>
                  <li>
                    <Link href="/tees" className="block px-4 py-2 hover:bg-gray-100">
                      SRL Tees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/two-piece"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      SRL 2 Catchy Piece
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/shirts"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Casual Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/corporate-wears"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Corporate Wears
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/trad-wears"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Trad Wears
                    </Link>
                  </li>
                </ul>
              </Box>
            )}
          </li>

          <li>
            <Link href="/services" className={`block py-2 ${isActive("/services")}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/locator" className={`block py-2 ${isActive("/locator")}`}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <Box className="flex items-center space-x-4">
          <Link href="/shop">
            <Image
              src="/assets/images/svg/cart-outline.svg"
              alt="Cart"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
          <Link href="/login">
            <Image
              src="/assets/images/svg/person-outline.svg"
              alt="Profile"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
