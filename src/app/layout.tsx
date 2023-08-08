import { inter } from "./fonts";
import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="pt_BR">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
