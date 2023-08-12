'use client'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import { Container } from 'reactstrap'
import Navigationbar from './components/Navigationbar'

const OpenSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apple Shop',
  description: 'Products Apple',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<>
  <html lang='en'>
  <body className={OpenSans.className}>
    
  <Navigationbar/>
  <Container>
      {children}
      </Container>
  </body>
  </html>
      </>
  )
}
