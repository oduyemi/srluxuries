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
    pathname === path
      ? "bg-butter text-goldie font-semibold"
      : "text-gray-700 hover:text-butter";

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

  // Mobile menu links
  const mobileLinks = [
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
  ];

  const renderMobileMenu = () =>
    isMobileMenuOpen && (
      <Box
        className="md:hidden px-4 py-3 mt-2 space-y-2 bg-white shadow-md rounded-lg animate-slide-down"
        sx={{ transition: "all 0.3s ease" }}
      >
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)} // ✅ auto-close on click
            className={`block py-2 px-3 rounded-md transition ${isActive(link.href)}`}
          >
            {link.label}
          </Link>
        ))}
      </Box>
    );

  return (
    <nav id="header" className="bg-white shadow-sm sticky top-0 z-50">
      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="py-3 px-4"
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
            className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {renderMobileMenu()}
        </Box>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:space-x-6 md:text-base font-medium items-center">
          <li>
            <Link href="/" className={`block py-2 px-2 rounded ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`block py-2 px-2 rounded ${isActive("/about")}`}>
              About
            </Link>
          </li>

          {/* Accessories Dropdown */}
          <li className="relative" ref={shopRef}>
            <button
              onClick={toggleShopDropdown}
              className="flex items-center py-2 px-2 hover:text-butter transition"
            >
              Accessories
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                  111.414 1.414l-4 4a1 1 0 
                  01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isShopDropdownOpen && (
              <Box className="absolute mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  {["Belts", "Caps", "Footwears", "Luxury Beads"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </li>

          {/* Wears Dropdown */}
          <li className="relative" ref={pagesRef}>
            <button
              onClick={togglePagesDropdown}
              className="flex items-center py-2 px-2 hover:text-butter transition"
            >
              Wears
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 
                  111.414 1.414l-4 4a1 1 0 
                  01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isPagesDropdownOpen && (
              <Box className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2">
                  {[
                    { label: "SRL Tees", href: "/tees" },
                    { label: "SRL 2 Catchy Piece", href: "/two-piece" },
                    { label: "Casual Shirts", href: "/shirts" },
                    { label: "Corporate Wears", href: "/corporate-wears" },
                    { label: "Trad Wears", href: "/trad-wears" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </li>

          <li>
            <Link href="/services" className={`block py-2 px-2 rounded ${isActive("/services")}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/locator" className={`block py-2 px-2 rounded ${isActive("/locator")}`}>
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
              className="h-6 w-6 hover:scale-110 transition"
            />
          </Link>
          <Link href="/login">
            <Image
              src="/assets/images/svg/person-outline.svg"
              alt="Profile"
              width={24}
              height={24}
              className="h-6 w-6 hover:scale-110 transition"
            />
          </Link>
        </Box>
      </Box>
    </nav>
  );
};
