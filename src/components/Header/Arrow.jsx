import { Img } from "components"
const Arrow = () => {
	return (
		<div className="w-full overflow-hidden flex flex-row py-[25px] px-0 box-border items-start justify-center opacity-[0.8]">
			<div className="w-3 overflow-hidden shrink-0 flex flex-row box-border items-start justify-start">
				<Img
					alt=""
          width={11}
          height={148}
					src="/assets/svg/arrow.svg"
				/>
			</div>
		</div>
	)
}

export default Arrow
