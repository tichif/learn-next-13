import './globals.css';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Learn Next 13',
  description: 'Generated by create next app',
};

const roboto = Roboto({ weight: ['300'], subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
