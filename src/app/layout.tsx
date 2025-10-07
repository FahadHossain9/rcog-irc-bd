import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "RCOG IRC Bangladesh - Royal College of Obstetricians & Gynaecologists",
  description:
    "Advancing women's healthcare in Bangladesh through excellence, education, and evidence-based practice. Access clinical protocols, training programs, and professional development resources.",
  keywords:
    "RCOG, Bangladesh, Obstetrics, Gynaecology, Medical protocols, Healthcare training, MRCOG, Medical education",
  authors: [{ name: "RCOG IRC Bangladesh" }],
  openGraph: {
    title: "RCOG IRC Bangladesh",
    description:
      "Advancing women's healthcare in Bangladesh through excellence, education, and evidence-based practice",
    type: "website",
    locale: "en_BD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
