import { cn } from '../../lib/utils'
export default function CardGroup ({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col w-full gap-4', className)}
      {...props}
    ></div>
  )
}
