import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مراجعة السيرة الذاتية - خبير متدرب في جوجل",
  description: "احصل على سيرة ذاتية مميزة مع تعليقات خبيرة من متدرب في جوجل. تحسينات حقيقية تجعلك ملاحظاً من قبل أفضل الموظفين.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} ${inter.variable} font-cairo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
