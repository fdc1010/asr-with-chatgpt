import Header from "../../components/Header"
import ContainerCard from "./ContainerCard"

const BlurControls = () => {
	return (
		<div className="absolute w-full top-[607px] right-[0px] left-[0px] [filter:blur(10px)] flex flex-col py-0 px-5 box-border items-start justify-center max-h-[709px]">
			<div className="absolute top-[0px] left-[calc(50%_-_650.5px)] [background:radial-gradient(50%_50%_at_50%_50%,_#ff5c0a,_#f7f0f0_50%,_#f7f0f0)] [filter:blur(10px)] w-[1301px] h-[5517.78px]">
				<ContainerCard />
				<Header />
			</div>
		</div>
	)
}

export default BlurControls
