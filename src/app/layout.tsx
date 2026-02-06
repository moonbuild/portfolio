import { Archivo_Black, Space_Mono } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import { OverlayProvider } from '@/context/OverlayContext';

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

export const metadata: Metadata = {
  title: 'Mourya Pranay',
  description: 'Portfolio of Mourya Pranay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceMono.variable}`}>
        <OverlayProvider>{children}</OverlayProvider>
      </body>
    </html>
  );
}
