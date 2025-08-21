"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import "./globals.css";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppChatButton } from "@/components/LiveChat";
import { Header } from "@/components/navigation/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SR Luxuries",
  description: "Your go-to fashion plug",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          {isAdminRoute ? children : <ClientSideLayout>{children}</ClientSideLayout>}
        </Box>

        {/* Bootstrap Bundle JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </body>
    </html>
  );
}

const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
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
