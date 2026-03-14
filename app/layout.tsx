import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Key Vault Fund | Institutional-Grade DeFi Fund',
  description: 'Key Vault provides liquidity to traders on digital asset exchanges and collects interest and yield from trading activity. They trade. You collect.',
  authors: [{ name: 'Key Vault Fund' }],
  keywords: ['crypto fund', 'DeFi', 'investment', 'institutional-grade', 'liquidity provision', 'digital assets', 'yield', 'hedge fund', 'delta neutral'],
  robots: 'index, follow',
  openGraph: {
    title: 'Key Vault Fund | Institutional-Grade DeFi Fund',
    description: 'Key Vault provides liquidity to traders on digital asset exchanges and collects interest and yield from trading activity. They trade. You collect.',
    url: 'https://keyvaultfund.com',
    siteName: 'Key Vault Fund',
    locale: 'en_US',
    images: [{ url: 'https://keyvaultfund.com/images/og_image.png', width: 1200, height: 630, alt: 'Key Vault Fund' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@keyvaultfund',
    creator: '@keyvaultfund',
    title: 'Key Vault Fund | Institutional-Grade DeFi Fund',
    description: 'Key Vault provides liquidity to traders on digital asset exchanges and collects interest and yield from trading activity. They trade. You collect.',
    images: ['https://keyvaultfund.com/images/og_image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/images/icon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
