import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneStep | Confidential Technical Portal",
  description:
    "Controlled-access technical portal for qualified partners under NDA.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-zinc-950">
          <div className="pointer-events-none fixed inset-0 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.10),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(0,0,0,0))]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>

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