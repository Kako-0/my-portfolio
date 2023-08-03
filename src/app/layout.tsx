import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rozha_One } from "next/font/google";

const rozha = Rozha_One({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kayro França - Frontend developer",
  description: "Portfolio de projetos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${rozha.className}`}>
        {children}
      </body>
    </html>
  );
}
