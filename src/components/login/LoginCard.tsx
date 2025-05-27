import { cn } from '../../lib/utils'

type LoginCardProps = React.ComponentProps<'div'>

export default function LoginCard ({
  className,
  children,
  ...props
}: LoginCardProps) {
  return (
    <div
      data-slot='login-card'
      className={cn(
        'w-full md:w-1/2 flex justify-center items-center px-4 md:px-16 py-8',
        className
      )}
      {...props}
    >
      {/* <div className='grid grid-cols-[auto_1fr] gap-4'>{children}</div> */}
      <div className='flex flex-col w-full gap-4 md:flex-row'>{children}</div>
    </div>
  )
}
