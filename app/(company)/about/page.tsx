import { sleep } from '@/lib/utils'
import { notFound } from 'next/navigation'

export default async function Page() {
  await sleep(1000)

  // TODO: This to test the not-found page
  // const random = Math.random()
  // if (random > 0.5) {
  //   notFound()
  // }

  return (
    <section>
      <div>
        <h1 className='text-2xl font-medium'>About</h1>
        <p className='text-sm opacity-50'>
          Company is a great company that does great things.
        </p>
      </div>
    </section>
  )
}
