import { Inter } from "next/font/google";
import "./globals.css";
import { ClientSideLayout } from "@/components/ClientSideLayouut";

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
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, padding: 0 }}>
        <ClientSideLayout>{children}</ClientSideLayout>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
      </body>
    </html>
  );
}
