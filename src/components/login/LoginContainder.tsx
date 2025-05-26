import { cn } from '../../lib/utils'

type LoginContainerProps = React.ComponentProps<'div'> & {
  backgroundImage: string
}

export default function LoginContainer ({
  backgroundImage,
  className,
  ...props
}: LoginContainerProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col md:flex-row bg-cover bg-center',
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
      {...props}
    ></div>
  )
}
