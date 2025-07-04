import type { Metadata } from "next";

// fonts
import { Noto_Sans } from "next/font/google";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// style
import "@/style/globals.css";

export const metadata: Metadata = {
  title: "Collosal Landing Page",
  description: "Landing Page Collosal",
  icons: {
    icon: "/assets/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${NotoSans.className}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
