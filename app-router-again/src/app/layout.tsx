import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="no-animation">
      <body style={inter.style}>
        <header className='p-4 bg-base-100'>
          <Link className="btn btn-ghost" href="/">App</Link>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
