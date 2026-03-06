import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jai Malhar Transport - Pan-India Logistics Solutions | JMT",
  description: "Reliable transport and logistics services across India. Road transport, container transport, warehousing & specialized goods handling. 500+ happy clients, 99% on-time delivery. Get your free quote today!",
  keywords: "logistics, transport, road transport, container transport, warehousing, India logistics, cargo transport",
  authors: [{ name: "Jai Malhar Transport" }],
  openGraph: {
    title: "Jai Malhar Transport - Your Trusted Logistics Partner",
    description: "Reliable, timely, and safe transport solutions across India. Join 500+ satisfied businesses.",
    url: "https://jmttransport.com",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
