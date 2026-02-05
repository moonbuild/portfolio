import { Archivo_Black, Space_Mono } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
