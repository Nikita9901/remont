import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'

const lato = Lato({weight: ['400', '900', '300', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Ремонт телефонов - Cyber Service',
  description: 'Ремонт мобильных телефонов и смартфонов в Минске – рядом с Вами! ✓Срочно ✓цены ниже ✓доставка курьером ✓бесплатная диагностика.',
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
