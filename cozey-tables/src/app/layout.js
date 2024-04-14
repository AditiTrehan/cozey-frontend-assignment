import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../../public/fonts/Larsseit/Larsseit.otf",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cozy | Shop Tables",
  description: "Cozy | Shop Tables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
