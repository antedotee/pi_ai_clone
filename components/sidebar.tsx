'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, User } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <div className="w-16 flex flex-col items-center py-4 bg-[#fdf7f5] border-r">
      <Link 
        href="/"
        className={`p-3 rounded-lg mb-2 ${pathname === '/' ? 'bg-[#e6e2e0]' : 'hover:bg-[#e6e2e0]'}`}
      >
        <Sparkles className="w-6 h-6 text-[#0e4435]" />
        <span className="sr-only">Discover</span>
      </Link>
      <Link 
        href="/profile"
        className={`p-3 rounded-lg ${pathname === '/profile' ? 'bg-[#e6e2e0]' : 'hover:bg-[#e6e2e0]'}`}
      >
        <User className="w-6 h-6 text-[#0e4435]" />
        <span className="sr-only">Profile</span>
      </Link>
    </div>
  )
}

