import { cn } from '../../lib/utils'

type LoginContainerProps = {
  backgroundImage?: string
} & React.ComponentProps<'div'>

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
      style={{ backgroundImage: `url(${backgroundImage ?? 'default-bg.jpg'})` }}
      {...props}
    ></div>
  )
}
