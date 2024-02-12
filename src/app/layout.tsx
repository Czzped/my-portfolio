import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";
import { SideBarContextProvider } from "@/context/sideBarContext";
import SideBar from "@/components/SideBar";
import ProgressBar from "@/components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Henrique | Front-End Developer",
  description: "Desenvolvedor fascinado pela tecnologia desde sempre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth text-thirdColor">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-secondaryColor">
          <SideBarContextProvider>
            <ProgressBar />
            <Header />
            <SideBar />
            {children}
          </SideBarContextProvider>
        </div>
      </body>
    </html>
  );
}
