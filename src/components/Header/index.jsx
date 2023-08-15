import Heading from "../Heading"
import SmallText from "./SmallText"
import SignUpPanel from "./SignUpPanel"
import ProductCard from "../ProductCard"
import Arrow from "./Arrow"

const Header = () => {
	return (
		<div className="w-full text-center py-2 my-2 text-5xs-2 text-darkslategray-100 font-fraunces">
			<ProductCard />
			<div className="py-10 my-10">
				<Heading />
				<SmallText />
				<SignUpPanel />
				<Arrow />
			</div>
		</div>
	)
}

export default Header
