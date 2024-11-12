import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";





const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JobOverflow",
  description: "Finding a job is hard. We make it easy.",
};



export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className="overscroll-none">
        <SessionWrapper>
        <Navbar/>
        <div className="min-h-screen">
        {children}</div>        
        <Footer />
        </SessionWrapper>
        
        </body>
    </html>
  );
}
