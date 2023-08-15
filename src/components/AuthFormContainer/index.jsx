import SignInEmail from "./SignInEmail"
import SignInGoogle from "./SignInGoogle"
import SignUpLogIn from "./SignUpLogIn"
import Tos from "./Tos"

const AuthFormContainer = () => {
	return (
		<div className="absolute w-[calc(100%_-_901px)] top-[216px] right-[450px] left-[451px] rounded-11xl bg-whitesmoke overflow-hidden flex flex-col pt-[29.5px] px-[30px] pb-[29.999996185302734px] box-border items-center justify-start gap-[20px] max-w-[400px] text-center text-sm text-darkslategray-100 font-fraunces">
			<SignUpLogIn />
			<SignInGoogle />
			<SignInEmail />
			<Tos />
		</div>
	)
}

export default AuthFormContainer
