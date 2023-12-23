import type { Metadata } from "next";
import { inter } from "./fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Spatium Space Hotel",
  description: "Book space hotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
