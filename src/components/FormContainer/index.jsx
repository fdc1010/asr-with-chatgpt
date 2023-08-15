import Title from "components/Heading/Title"
import VideoLoader from "./VideoLoader"
import Record from "./Record"
import VideoTutorial from "./VideoTutorial"

const FormContainer = () => {
	return (
		<div className="relative w-[813.13px] h-[593.68px] max-w-[813.125px] text-center text-8xl-1 text-darkslategray font-fraunces">
			<Title />
			<VideoLoader />
			<Record />
			<SignInButton />
			<VideoTutorial />
		</div>
	)
}

export default FormContainer
