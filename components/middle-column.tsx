'use client'

import { usePathname } from 'next/navigation'
import { MiddleColumnProfile } from './middle-column-profile'
import { MiddleColumnDiscover } from './middle-column-discover'

export function MiddleColumn() {
  const pathname = usePathname()
  
  return (
    <div className="w-80 border-r overflow-y-auto">
      {pathname === '/profile' ? <MiddleColumnProfile /> : <MiddleColumnDiscover />}
    </div>
  )
}

