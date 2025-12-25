import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css"; // Ensure this path is correct for your styles

const inter = Inter({ subsets: ["latin"] });


// 1. NAMED EXPORT for Metadata (SEO)
export const metadata: Metadata = {
  title: {
    default: "Operation Gridlack | Forensic Judicial Corruption Report",
    template: "%s | Operation Gridlack",
  },
  description: "Public disclosure of evidence regarding 18 U.S. Code § 241, judicial records tampering, and predatory towing racketeering in Chelan County, WA.",
  keywords: ["Chelan County", "Judicial Corruption", "RCW 46.55", "B&T Towing"],
};

// 2. DEFAULT EXPORT for the Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">

      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        <Navbar></Navbar>
        <div className="w-full bg-red-600 text-white text-[10px] md:text-xs font-mono py-1 px-4 flex justify-between items-center border-b border-red-500 sticky top-0 z-[60]">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            <span><strong>SUPERIOR COURT CAUSE:</strong> 24-1-00253-04</span>
            <span><strong>SHERIFF INCIDENT:</strong> 24C06401</span>
          </div>
          <div className="hidden lg:flex gap-4">
            <span><strong>COURT:</strong> CHELAN COUNTY SUPERIOR COURT</span>
            <span className="animate-pulse bg-white text-red-600 px-1 font-bold">OFFICIAL EVIDENCE PORTAL</span>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}