import { useForm } from 'react-hook-form'

type LoginInputs = {
  email: string
  password: string
}

export default function LoginFields () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>()

  const onSubmit = (data: LoginInputs) => {
    console.log('Submitted:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className=''>
        <label className='block text-sm font-medium'>Email</label>
        <input
          type='email'
          {...register('email', { required: 'Email is required' })}
          className='w-full border border-gray-300 rounded-md px-3 py-2'
        />
        {errors.email && (
          <p className='text-sm text-red-500 mt-1'>{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className='block text-sm font-medium'>Password</label>
        <input
          type='password'
          {...register('password', { required: 'Password is required' })}
          className='w-full border border-gray-300 rounded-md px-3 py-2'
        />
        {errors.password && (
          <p className='text-sm text-red-500 mt-1'>{errors.password.message}</p>
        )}
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'
      >
        Login
      </button>
    </form>
  )
}
