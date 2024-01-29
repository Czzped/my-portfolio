import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
