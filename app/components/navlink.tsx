'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  title: string
  path: string
  icon: JSX.Element
}

export function NavLink({ title, path, icon }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      href={path}
      className={`text-gray-500 font-medium flex items-center gap-[2px]
      hover:text-gray-200 transition-all ${pathname === path && 'text-gray-200'}`}
    >
      {icon}
      {title}
    </Link>
  )
}
