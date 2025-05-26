import './App.css'
import {
  LoginContainer,
  LoginBanner,
  LoginCard,
  CardGroup,
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter
} from './components/login'
import LoginFields from './components/usage/FormExample'

function App () {
  return (
    <LoginContainer className=''>
      <LoginBanner className='text-[#1293aa]' />
      <LoginCard>
        <CardGroup>
          <Card className='w-full backdrop-blur-md bg-white/80 shadow-xl border-0'>
            <CardHeader>
              <CardTitle className='text-cyan-600 text-xl'>Halo,</CardTitle>
            </CardHeader>
            <CardContent>
              <LoginFields />
            </CardContent>
          </Card>

          <Card className='w-full bg-cyan-600 text-white p-4 shadow-lg border-0'>
            <CardContent>
              <CardTitle className='text-sm'>"Pink is new black"</CardTitle>
            </CardContent>
            <CardFooter className='justify-end text-sm'>nanang.mr</CardFooter>
          </Card>
        </CardGroup>

        {/* Card 3 */}
        <Card className='w-60 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border-0 p-4 flex flex-col justify-between'>
          <CardContent>
            <div className='text-gray-500 text-sm'>May ‘25</div>
            <CardTitle className='text-4xl text-orange-400 font-bold mt-2'>
              +
            </CardTitle>
          </CardContent>
          <CardFooter className='text-center text-sm text-gray-700'>
            Demak <br /> Mostly Clear <br /> H: 24° L: 18°
          </CardFooter>
        </Card>
      </LoginCard>
    </LoginContainer>
  )
}

export default App
