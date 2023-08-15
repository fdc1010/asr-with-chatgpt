import Heading from "components/Heading"
import ProductCard from "components/ProductCard"

const Trascribing = ({ config, profile, vector, group, equalizer }) => {
	return (
		<div className="relative w-[1440px] h-[611.39px] text-left text-5xs-2 text-tomato font-inter">
			<ProductCard />
			<Heading />
			<div className="absolute w-[calc(100%_-_980px)] top-[312.39px] right-[490px] left-[490px] rounded-11xl [background:linear-gradient(63.14deg,_#ec6a33,_#ff5c0a_50%,_rgba(255,_92,_10,_0.85))] h-[233px] text-3xl text-whitesmoke font-dm-sans">
				<div className="absolute top-[58.61px] left-[135px] w-[190px] h-[142px]">
					<div className="absolute top-[69px] left-[0px] leading-[33px]">
						(2/3) transcribing...
					</div>
					<div className="absolute top-[109px] left-[calc(50%_-_24px)] text-base leading-[33px] opacity-[0.6]">
						cancel
					</div>
					<img
						className="absolute top-[0px] left-[77px] w-9 h-10"
						alt=""
						src={equalizer}
					/>
				</div>
			</div>
			<div className="absolute top-[343px] left-[376px] w-[620px] overflow-hidden" />
		</div>
	)
}

export default Trascribing
