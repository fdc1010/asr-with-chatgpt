import PropTypes from 'prop-types'
import { Button } from '.'

const SmokeButtonPill = ({ children, size = 150, isSemiBold = true, onHandleClick }) => {
  
  return (
    <div
      className={`rounded-[54px] bg-whitesmoke shadow-[0px_1px_16px_-6px_rgba(61,_63,_84,_0.33)] overflow-hidden items-start justify-center w-[${size}px] h-[45px] min-w-[150px] text-darkslategray-100 hover:bg-gray-400 cursor-pointer`}>
      <Button
        type="button"
        className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center"
        onClick={onHandleClick}>
        {children}
      </Button>
    </div>
  )
}

SmokeButtonPill.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  isSemiBold: PropTypes.bool,
  onHandleClick: PropTypes.func
}

export { SmokeButtonPill }
