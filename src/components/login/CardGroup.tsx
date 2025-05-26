type CardGroupProps = React.PropsWithChildren

export default function CardGroup ({ children }: CardGroupProps) {
  return <div className='flex flex-col gap-4 w-fit'>{children}</div>
}
