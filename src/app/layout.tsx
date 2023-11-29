import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({weight: ['400', '900', '300', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Cyber Service',
  description: 'Ремонт телефонов Минск',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
