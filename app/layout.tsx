import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LeftSide from "@/components/SocialLinks/LeftSide";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});
import { Providers } from './providers'
import Navbar from "@/components/Navbar/Navbar";
import { fetchSocialLinksData } from "@/lib/data";

export const metadata: Metadata = {
  title: {
      default: "Harjot Singh",
      template: "Harjot Singh | %s",
  },
  description: "Personal portfolio website"
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const socialLink = await fetchSocialLinksData();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}  bg-white dark:bg-primary transition-all duration-500`}>
        <Providers>
            <Navbar />
            <div
              className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
            >
              <LeftSide socialLink={socialLink} />
            </div>
            {children}
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout