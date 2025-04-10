import type { Metadata } from "next";
import { Space_Grotesk } from 'next/font/google';
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], // Especifique os subsets necessários (geralmente 'latin')
  // weight: ['400', '700'], // Se você quiser especificar pesos diferentes
});

export const metadata: Metadata = {
  title: "Positivus - Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
