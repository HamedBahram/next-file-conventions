import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='text-2xl font-medium'>Not Found</h2>
        <p className='opacity-50'>Could not find requested resource</p>
        <Button asChild className='mt-3'>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </section>
  )
}
