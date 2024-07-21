import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Capi Agency",
  description: "Welcome to Capi Agency",
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="mt-[60px] xl:mt-[100px]">{children}</div>
        <Footer />

        <div className="fixed group bottom-[60px] right-[-20px] flex gap-2 text-yellow-500 uppercase cursor-pointer -rotate-90 font-semibold text-sm z-50 items-center">
          back to top
          <FontAwesomeIcon className="group-hover:translate-x-[5px] transition-transform duration-500 text-md" icon={faArrowRight} />
        </div>
      </body>
    </html>
  );
}
