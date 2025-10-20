import './globals.css'
import type { ReactNode } from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Priscilla | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto p-6">
          {/* Konten halaman */}
          {children}

          {/* Tombol Home */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white font-semibold transition-all"
            >
              🏠 Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
