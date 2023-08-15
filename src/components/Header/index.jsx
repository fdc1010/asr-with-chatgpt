import Heading from '../Heading'
import SmallText from './SmallText'
import SignUpPanel from './SignUpPanel'
import ProductCard from '../ProductCard'
import Arrow from './Arrow'
import { noop } from 'lodash'
import PropTypes from 'prop-types'

const Header = ({ onHandleClick = noop }) => {
  return (
    <div className="w-full text-center py-2 my-2 text-5xs-2 text-darkslategray-100 font-fraunces">
      <ProductCard />
      <div className="py-10 mx-auto">
        <Heading />
        <SmallText />
        <SignUpPanel onHandleClick={onHandleClick} />
        <Arrow />
      </div>
    </div>
  )
}

Header.propTypes = {
  onHandleClick: PropTypes.func
}
export default Header
