import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Любимчик — уютный зоомагазин",
  description:
    "Современный адаптивный сайт зоомагазина «Любимчик»: товары, преимущества, отзывы и контакты."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
