import "./globals.css";

import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({ weight: ["400", "700"], subsets: ["latin"] });

import localFont from "next/font/local";
const myFont = localFont({ src: "/font/state.otf" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dm Taller</title>
      </head>

      <body className={myFont.className}>{children}</body>
    </html>
  );
}
