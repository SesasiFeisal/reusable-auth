// import { cn } from '../../lib/utils'

// type LoginCardProps = { backgroundColor?: string } & React.ComponentProps<'div'>
// export default function LoginCard ({
//   className,
//   children,
//   ...props
// }: LoginCardProps) {
//   return (
//     <div className='md:w-1/2 w-full flex flex-col justify-center items-center p-6 space-y-8 bg-none'>
//       <div
//         className={cn(
//           `w-full max-w-sm p-6 backdrop-blur-md shadow-xl rounded-xl space-y-4 bg-white/30`,
//           className
//         )}
//       >
//         {children}
//       </div>
//     </div>
//   )
// }

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
        'w-full md:w-1/2 flex justify-center items-center', // center section 2
        className
      )}
      {...props}
    >
      <div className='grid grid-cols-[auto_1fr] gap-4'>{children}</div>
    </div>
  )
}
