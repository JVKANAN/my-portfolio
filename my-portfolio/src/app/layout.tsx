import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const inter = Poppins({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Vitor',
  description: 'Bem-vindo ao meu playground digital. Sou um pentester apaixonado por desvendar os segredos ocultos nos códigos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
