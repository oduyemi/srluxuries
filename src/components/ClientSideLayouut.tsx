"use client";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Header } from "./navigation/Header";
import { Box } from "@mui/material";
import { WhatsAppChatButton } from "./LiveChat";
import { Footer } from "./navigation/Footer";




export const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isAdminLogin = pathname === "/admin/login";

  useEffect(() => {
    if (pathname.startsWith("/admin") && !isAdminLogin) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [pathname, router, isAdminLogin]);

  const isAdminPage = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Header />}
      <Box flex="1" m={0} p={0}>
        {children}
      </Box>
      {!isAdminPage && (
        <>
          <WhatsAppChatButton />
          <Footer />
        </>
      )}
    </>
  );
};
