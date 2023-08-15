import SignInEmail from './SignInEmail'
import SignInGoogle from './SignInGoogle'
import SignUpLogIn from './SignUpLogIn'
import Tos from './Tos'

const AuthFormContainer = () => {
  return (
    <div className="w-full blur-[0px] rounded-11xl bg-whitesmoke overflow-hidden flex flex-col items-center justify-start gap-[20px] max-w-[400px] text-center text-sm text-darkslategray-100 font-fraunces">
      <SignUpLogIn />
      <SignInGoogle />
      <SignInEmail />
      <Tos />
    </div>
  )
}

export default AuthFormContainer
