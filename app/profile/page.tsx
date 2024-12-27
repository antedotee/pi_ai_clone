import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import { Settings, History, Volume2, MessageSquare, Share2, Shield, FileText } from 'lucide-react'

export default function Profile() {
  return (
    <main>
      <Sidebar />
      <div className="pl-20 pr-4 py-4">
        <h1 className="text-4xl font-serif text-[#0e4435] mb-8">Profile</h1>
        <div className="max-w-2xl space-y-4">
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <Settings className="w-5 h-5 text-[#0e4435]" />
            <span>Account</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <History className="w-5 h-5 text-[#0e4435]" />
            <span>Manage history</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <Volume2 className="w-5 h-5 text-[#0e4435]" />
            <span>Voice settings</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <MessageSquare className="w-5 h-5 text-[#0e4435]" />
            <span>Give feedback</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <Share2 className="w-5 h-5 text-[#0e4435]" />
            <span>Share Pi with others</span>
          </Link>
          <div className="border-t border-[#e6e2e0] my-4" />
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <Shield className="w-5 h-5 text-[#0e4435]" />
            <span>Privacy policy</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 p-4 hover:bg-[#e6e2e0] rounded-lg">
            <FileText className="w-5 h-5 text-[#0e4435]" />
            <span>Terms of service</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

