import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priority Moving Group | Moving Made Simple, Stress-Free',
  description:
    'Professional moving services for homes and businesses. Licensed & insured. Get a free quote today.',
  keywords: 'moving company, local movers, long distance moving, packing services, residential moving',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
