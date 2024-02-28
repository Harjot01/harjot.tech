import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});
import { Providers } from './providers'

export const metadata: Metadata = {
  title: "Harjot Singh",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}  bg-lightMode dark:bg-primary transition-all duration-500`}>
        <Providers>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
