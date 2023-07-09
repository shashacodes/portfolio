import "./globals.css";
import { Fredericka_the_Great, Inter } from "next/font/google";
import styles from "./style.module.css";

const inter = Fredericka_the_Great({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "sharon's portfolio",
  description: "This website contains things you need to know and worksdone.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-[100%] bg-slate-600">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
