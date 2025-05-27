import { cn } from '../../lib/utils'

type LoginBannerProps = React.ComponentProps<'div'> & {
  image: string
  imageAlt?: string
  title?: string
  backgroundColor?: string
}

export default function LoginBanner ({
  image,
  imageAlt = 'Sidak Logo',
  title = 'Sistem Informasi Website SESASI',
  className,
  backgroundColor = 'bg-white/30',
  ...props
}: LoginBannerProps) {
  return (
    <div
      className='relative flex items-center justify-center w-full h-64 md:h-auto md:w-1/2 md'
      data-slot='login-banner'
    >
      <div
        className={`absolute inset-0 ${backgroundColor} backdrop-blur-3xl`}
      />
      <div className='relative z-10 px-6 text-center md:px-12'>
        <div
          className={cn(
            'flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 ',
            className
          )}
          {...props}
        >
          <img
            className='object-cover aspect-square'
            src={image}
            alt={imageAlt}
            width={100}
            height={100}
          />

          <div className='self-stretch hidden w-px bg-current md:block ' />
          <h1 className='text-3xl font-bold text-center md:text-left'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
