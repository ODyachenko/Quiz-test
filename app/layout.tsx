import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import ReduxProvider from '@/redux/Provider';
import './globals.scss';

const inter = Noto_Sans({ subsets: ['latin'], weight: ['400', '600', '900'] });

export const metadata: Metadata = {
  title: 'Movie Quiz',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
