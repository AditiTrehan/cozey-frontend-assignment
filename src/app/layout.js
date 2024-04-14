import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../../public/fonts/Larsseit/Larsseit-Light.otf",
});

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
