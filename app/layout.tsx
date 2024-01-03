import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/components/header/Header";
import { Theme } from "@/app/components/theme/Theme";
import { ThemeSwicher } from "@/app/components/theme/ThemeSwicher";

const fira_code = Fira_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ostap Klysa CV",
  description: "Hi, I`m Ostap. Front-End Developer from Porto :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fira_code.className} bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300`}>
        <Theme>
          <div className="m-auto min-h-screen max-w-screen-xl lg:grid grid-cols-3 gap-4 px-6 md:px-12 md:py-20 lg:px-24 lg:py-0 leading-relaxed relative">
            <ThemeSwicher />
            <Header />
            <main className="col-span-2 pt-5  lg:p-16">{children}</main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
