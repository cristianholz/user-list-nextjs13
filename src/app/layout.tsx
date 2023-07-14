import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "App",
  description: "App teste nextjs 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <section className="h-full text-slate-950 px-24 py-10 max-lg:px-5">
          {children}
        </section>
      </body>
    </html>
  );
}
