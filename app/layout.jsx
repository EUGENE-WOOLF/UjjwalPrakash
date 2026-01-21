import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ujjwal Prakash",
  description: "Go developer and system programmer.",
};

export default function RootLayout({ chiladren }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
