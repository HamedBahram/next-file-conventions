import { sleep } from '@/lib/utils'

export default async function Page() {
  await sleep(1000)

  return (
    <section>
      <div>
        <h1 className='text-2xl font-medium'>Team</h1>
        <p className='text-sm opacity-50'>This is our amazing team.</p>
      </div>
    </section>
  )
}
