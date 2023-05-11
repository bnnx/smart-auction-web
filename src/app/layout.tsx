import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smart Auction',
  description: 'A auction website with smart contracts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className='bg-zinc-900 text-zinc-100'>{children}</body>
    </html>
  )
}
