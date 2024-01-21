import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import SideBar from '@/components/layouts/Sidebar'
import { Epilogue } from 'next/font/google'
import Header from '@/components/layouts/Header'

const epilogue = Epilogue({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
