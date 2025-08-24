"use client";
import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiInstagram, mdiCardAccountMail, mdiTwitter } from "@mdi/js";
import { MailPopup } from "./Popup";

export const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <footer className="relative bg-tan pt-12 pb-8">
      <Container maxWidth="xl">
        {/* Top Section */}
        <Box className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-0">
          {/* Contact & Social */}
          <Box className="lg:w-6/12">
            <Typography variant="h4" className="text-3xl font-semibold text-butter mb-2">
              Let&apos;s keep in touch!
            </Typography>
            <Typography variant="body1" className="text-white mb-4">
              Find us on any of these platforms, we respond quickly.
            </Typography>
            <Box className="flex gap-4 mt-4">
              <Link href="https://twitter.com/srluxuries" target="_blank">
                <Box className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-blue-400 transition-colors cursor-pointer">
                  <Icon path={mdiTwitter} size={1.2} className="text-black hover:text-white" />
                </Box>
              </Link>
              <Link href="https://instagram.com/sr_luxuries" target="_blank">
                <Box className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-pink-400 transition-colors cursor-pointer">
                  <Icon path={mdiInstagram} size={1.2} className="text-pink-500 hover:text-white" />
                </Box>
              </Link>
              <Box
                onClick={openPopup}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-ggreen transition-colors cursor-pointer"
              >
                <Icon path={mdiCardAccountMail} size={1.2} className="text-ggreen hover:text-white" />
                <MailPopup isOpen={isPopupOpen} onClose={closePopup} />
              </Box>
            </Box>
          </Box>

          {/* Links */}
          <Box className="lg:w-6/12 flex flex-col sm:flex-row justify-between gap-10 lg:gap-20">
            <Box>
              <Typography className="uppercase text-butter text-sm font-semibold mb-3">Useful Links</Typography>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white hover:text-butter text-sm font-medium">About Us</Link></li>
                <li><Link href="/accesories" className="text-white hover:text-butter text-sm font-medium">Accessories</Link></li>
                <li><Link href="/collections" className="text-white hover:text-butter text-sm font-medium">Collections</Link></li>
                <li><Link href="/privacy-policy" className="text-white hover:text-butter text-sm font-medium">Privacy Policy</Link></li>
              </ul>
            </Box>
            <Box>
              <Typography className="uppercase text-butter text-sm font-semibold mb-3">Other Resources</Typography>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-white hover:text-butter text-sm font-medium">Services</Link></li>
                <li><Link href="/appointment" className="text-white hover:text-butter text-sm font-medium">Book Appointment</Link></li>
                <li><Link href="/privacy-policy" className="text-white hover:text-butter text-sm font-medium">Privacy Policy</Link></li>
                <li><Link href="/locator" className="text-white hover:text-butter text-sm font-medium">Contact Us</Link></li>
              </ul>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <hr className="my-6 border-goldie" />

        {/* Bottom Section */}
        <Box className="text-center">
          <Typography variant="body2" className="text-subtext font-semibold">
            &copy; {new Date().getFullYear()} Samuel Rowland Luxuries | All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};
