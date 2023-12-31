import type { Metadata } from 'next'

import { Rubik } from 'next/font/google'
import './globals.css'
import HederTop from './components/HederTop'
import HeaderMain from './components/HeaderMain'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
  
      <body className={rubik.className}>
         <HederTop />
     <HeaderMain />
 
     <Sidebar />
    {children} 

     <Footer />
     
     </body>
     
   
    </html>
  )
}
