import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/fonts/montserrat";

export const metadata: Metadata = {
  title: "ChartBox",
  description: "exam test",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html className={montserrat.variable} lang="en">
      <body className={`${montserrat.className} `}>
        <main className="flex items-center justify-center min-h-screen min-w-screen">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
