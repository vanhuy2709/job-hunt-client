import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Red_Hat_Display, Poppins, Epilogue } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/theme-registry/theme.registry";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
