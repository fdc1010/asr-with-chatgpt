import PropTypes from 'prop-types'
import { Button } from '.'
import { noop } from 'lodash'

const OrangeButtonPill = ({ children, onHandleClick = noop }) => {
  return (
    <div className="rounded-[54px] bg-orangered shadow-[0px_1.81px_14.46px_-5.42px_rgba(61,_63,_84,_0.6)] overflow-hidden box-border h-[45px] min-w-[147px] text-whitesmoke-100">
      <Button
        onClick={onHandleClick}
        className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        {children}
      </Button>
    </div>
  )
}

OrangeButtonPill.propTypes = {
  children: PropTypes.node,
  onHandleClick: PropTypes.func
}

export { OrangeButtonPill }
