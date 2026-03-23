import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneStep Technologies | Online Free Chlorine Monitoring",
  description:
    "Stabilized reagent systems and reaction-kinetic detection platforms for practical online free chlorine monitoring and automated water analysis.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-zinc-900`}>
        <div className="min-h-screen bg-white">
          <div className="relative">
            <SiteHeader />
            <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}