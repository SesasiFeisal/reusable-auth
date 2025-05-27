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
    <LoginContainer className='' backgroundImage='/default-bg.jpg'>
      <LoginBanner className='text-[#1293aa]' image='/logo-sidak.png' />
      <LoginCard>
        <CardGroup className='grow'>
          <Card className='w-full border-0 shadow-xl backdrop-blur-md bg-white/80'>
            <CardHeader>
              <CardTitle className='text-xl text-cyan-600'>Halo,</CardTitle>
            </CardHeader>
            <CardContent>
              <LoginFields />
            </CardContent>
          </Card>

          <Card className='w-full p-4 text-white border-0 shadow-lg bg-cyan-600'>
            <CardContent>
              <CardTitle className='text-sm'>
                "Sports For Me Way Sports For Me Is When A Guy Walks Off The
                Court, And You Really Can'T Tell Whether He Won Or Lost, When He
                Carries Himself With Pride Either Way..
              </CardTitle>
            </CardContent>
            <CardFooter className='justify-end text-sm'>nanang.mr</CardFooter>
          </Card>
        </CardGroup>

        {/* Card 3 */}
        <Card className='flex flex-col justify-between w-full p-4 border-0 bg-white/80 backdrop-blur-md'>
          <CardContent>
            <div className='text-sm text-gray-500'>May ‘25</div>
            <CardTitle className='mt-2 text-4xl font-bold text-orange-400'>
              +
            </CardTitle>
          </CardContent>
          <CardFooter className='text-sm text-center text-gray-700'>
            Demak <br /> Mostly Clear <br /> H: 24° L: 18°
          </CardFooter>
        </Card>
      </LoginCard>
    </LoginContainer>
  )
}

export default App
