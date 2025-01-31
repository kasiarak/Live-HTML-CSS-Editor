import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live code editor",
  description: "Interactive HTML and CSS editor with live preview feature. Instantly see the output as you code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
