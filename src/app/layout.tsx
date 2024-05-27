import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Tagmanager from "@/app/components/Tagmanager";
import Tagmanager2 from "@/app/components/Tagmanager2";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stories 10x",
  description: "Aprenda como aumentar consideravelmente o número de visualizações dos seus stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sora.className}>
      <Suspense>
          <Tagmanager />
          <Tagmanager2 />
        </Suspense>
        {children}
        </body>
    </html>
  );
}
