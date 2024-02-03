import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'



export const metadata: Metadata = {
  title: 'Amigo Secreto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-gray-300">{children}</body>
    </html>
  )
}
