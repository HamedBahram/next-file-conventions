import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section>
      <div>
        <Skeleton className='h-7 w-24' />
        <Skeleton className='mt-2 h-5 w-[350px]' />
      </div>
    </section>
  )
}
