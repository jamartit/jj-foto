import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import ImageWithText from "@/components/ImageWithText";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Joanna Jamroz Fotografia",
  description: "Joanna Jamroz Fotografia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen ">
          <NavBar />
          <ImageCarousel />
          <div className={"mb-auto"}>{children}</div>
          <ImageWithText
            imageSrc="/logobig.png"
            imageAlt="Zdjecie"
            title="Oto nasze logo!"
            description="nasze logo powstalo za czasow blebleble"
            imageOnRight={false} 
          />

          <Footer />
        </main>
      </body>
    </html>
  );
}
