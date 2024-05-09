'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link
      className={
        isActive ? 'underline decoration-sky-600 underline-offset-8' : ''
      }
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
