import type { Metadata } from "next";
import {Raleway} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live code editor",
  description: "Interactive HTML and CSS editor with live preview feature. Instantly see the output as you code.",
  icons: {
    icon: '/coding-website-svgrepo-com.svg',
  }
};

const raleway = Raleway({
  subsets: ['latin'], 
  weight: ['200']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
      </body>
    </html>
  );
}
