import Heading from "../Heading"
import ProductCard from "../ProductCard"

const RecordingTimer = ({
	config,
	profile,
	vector,
	group,
	https3A2F2Fa7b19d7a245c07,
	https3A2F2Fa7b19d7a245c071,
	https3A2F2Fa7b19d7a245c072,
	equalizer,
}) => {
	return (
		<div className="relative w-[1440px] h-[611.39px] text-center text-5xs-2 text-tomato font-fraunces">
			<ProductCard />
			<Heading />
			<div className="absolute w-[calc(100%_-_980px)] top-[312.39px] right-[490px] left-[490px] rounded-11xl [background:linear-gradient(63.14deg,_rgba(255,_92,_10,_0.75),_#ff5c0a_50%,_rgba(255,_92,_10,_0.85))] h-[233px] text-[32.21px] text-whitesmoke">
				<div className="absolute w-[calc(100%_-_60px)] top-[calc(50%_+_71.5px)] right-[30px] left-[30px] h-5">
					<img
						className="absolute h-[calc(100%_-_3px)] w-[calc(100%_-_383px)] top-[1.5px] right-[383px] bottom-[1.5px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
						alt=""
						src={https3A2F2Fa7b19d7a245c07}
					/>
					<img
						className="absolute h-full w-[calc(100%_-_380px)] top-[0px] right-[0px] bottom-[0px] left-[380px] max-w-full overflow-hidden max-h-full object-cover"
						alt=""
						src={https3A2F2Fa7b19d7a245c071}
					/>
				</div>
				<div className="absolute w-[calc(100%_-_380px)] top-[calc(50%_+_73.5px)] right-[190px] left-[190px] rounded-181xl bg-gray-100 shadow-[0px_2px_16px_rgba(61,_63,_84,_0.2)] h-20 overflow-hidden">
					<img
						className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-181xl max-w-full overflow-hidden max-h-full object-cover"
						alt=""
						src={https3A2F2Fa7b19d7a245c072}
					/>
				</div>
				<div className="absolute h-[42.18%] w-[61.52%] top-[22.2%] right-[19.13%] bottom-[35.62%] left-[19.35%]">
					<img
						className="absolute h-[48.49%] w-[100.06%] top-[51.51%] right-[-0.06%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
						alt=""
						src={equalizer}
					/>
					<div className="absolute top-[0%] left-[34.56%] leading-[64.42px] font-semibold">
						02:34
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecordingTimer
