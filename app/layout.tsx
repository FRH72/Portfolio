
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meisam Mozafari',
  description: 'WRITER, FILM AND THEATER DIRECTOR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'mainLayout'}>
        {children}
      </body>
    </html>
  )
}
