import { cn } from '../../lib/utils'

type LoginBannerProps = {
  image?: string
  imageAlt?: string
  title?: string
  backgroundColor?: string
} & React.ComponentProps<'div'>

export default function LoginBanner ({
  image = 'logo-sidak.png',
  imageAlt = 'Sidak Logo',
  title = 'Sistem Informasi Website SESASI',
  className,
  backgroundColor = 'bg-white/30',
  ...props
}: LoginBannerProps) {
  return (
    <div
      className='relative md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center'
      data-slot='login-banner'
    >
      <div
        className={`absolute inset-0 ${backgroundColor} backdrop-blur-3xl`}
      />
      <div className='relative z-10 text-center px-6 md:px-12'>
        <div
          className={cn(
            'flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 ',
            className
          )}
          {...props}
        >
          <img
            className='aspect-square object-cover'
            src={image}
            alt={imageAlt}
            width={100}
            height={100}
          />

          <div className='hidden md:block w-1 self-stretch bg-current ' />

          <h1 className='text-center md:text-left text-3xl font-bold'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
