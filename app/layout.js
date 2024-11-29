import './globals.css'
import {Analytics} from '@vercel/analytics/react'

export const metadata = {
  title: 'Portfolio',
  description: "Siddartha Kodaboina's Portfolio Website",
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
