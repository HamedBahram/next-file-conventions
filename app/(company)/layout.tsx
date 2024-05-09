import NavLink from '@/components/ui/nav-links'

export default function CompanyLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12 dark:border-gray-700'>
          <nav className='flex flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-4'>
              <li>
                <NavLink href='/about'>About</NavLink>
              </li>
              <li>
                <NavLink href='/team'>Team</NavLink>
              </li>
              <li>
                <NavLink href='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <main className='ml-12 grow p-6'>{children}</main>
      </div>
    </section>
  )
}
