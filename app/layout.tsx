import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { MiddleColumn } from "@/components/middle-column"
import { Chat } from "@/components/chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pi.ai Clone",
  description: "An emotionally intelligent AI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#fdf7f5]`}>
        <div className="flex h-screen">
          <Sidebar />
          <MiddleColumn />
          <Chat />
        </div>
      </body>
    </html>
  )
}

