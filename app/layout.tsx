import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brooklyn Welsh - Full Stack Software Engineer',
  description: 'The personal website of Brooklyn Welsh.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
