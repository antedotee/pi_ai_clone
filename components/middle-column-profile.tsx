import Link from "next/link"
import { ChevronRight, Settings, History, Volume2, SmileIcon, Share2, Shield, FileText, DiscIcon as Discord } from 'lucide-react'

export function MiddleColumnProfile() {
  return (
    <div className="w-80 p-6 space-y-6">
      <h1 className="text-4xl font-serif text-[#0e4435] mb-8">Profile</h1>
      
      <div className="space-y-5">
        <Link 
          href="#" 
          className="flex items-center justify-between text-[#0e4435] text-lg"
        >
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6" />
            <span>Account</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>

        <Link 
          href="#" 
          className="flex items-center justify-between text-[#0e4435] text-lg"
        >
          <div className="flex items-center gap-3">
            <History className="w-6 h-6" />
            <span>Manage history</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>

        <Link 
          href="#" 
          className="flex items-center justify-between text-[#0e4435] text-lg"
        >
          <div className="flex items-center gap-3">
            <Volume2 className="w-6 h-6" />
            <span>Voice settings</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>

        <Link 
          href="#" 
          className="flex items-center gap-3 text-[#0e4435] text-lg"
        >
          <SmileIcon className="w-6 h-6" />
          <span>Give feedback</span>
        </Link>

        <Link 
          href="#" 
          className="flex items-center gap-3 text-[#0e4435] text-lg"
        >
          <Share2 className="w-6 h-6" />
          <span>Share Pi with others</span>
        </Link>
      </div>

      <div className="border-t border-[#e6e2e0] my-6" />

      <Link 
        href="#" 
        className="flex items-center gap-3 text-[#0e4435] text-lg"
      >
        <Discord className="w-6 h-6" />
        <span>Join our Discord community</span>
      </Link>

      <div className="border-t border-[#e6e2e0] my-6" />

      <div className="space-y-5">
        <Link 
          href="#" 
          className="flex items-center justify-between text-[#0e4435] text-lg"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" />
            <span>Privacy policy</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>

        <Link 
          href="#" 
          className="flex items-center justify-between text-[#0e4435] text-lg"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6" />
            <span>Terms of service</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
      </div>
    </div>
  )
}

