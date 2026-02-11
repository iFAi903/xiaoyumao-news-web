import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "🪶 小羽毛 AI 新闻早报",
  description: "每日精选 AI 行业新闻、热门应用和前沿技术趋势",
  keywords: ["AI", "人工智能", "新闻", "早报", "科技", "Product Hunt", "GitHub"],
  authors: [{ name: "Xiaoyumao" }],
  openGraph: {
    title: "🪶 小羽毛 AI 新闻早报",
    description: "每日精选 AI 行业新闻、热门应用和前沿技术趋势",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
