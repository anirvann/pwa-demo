import type { Metadata } from 'next'
import './globals.css'
import Header from '@/app/components/Header';

export const metadata: Metadata = {
  title: 'PWA',
  description: 'Generated by create next app',
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon.png"></link>
      <meta name="theme-color" content="#012D58" />
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
