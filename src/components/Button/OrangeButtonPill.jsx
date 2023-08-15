import PropTypes from 'prop-types'
import { Button } from '.'

const OrangeButtonPill = ({ children }) => {
  return (
    <div className="rounded-[54px] bg-orangered shadow-[0px_1.81px_14.46px_-5.42px_rgba(61,_63,_84,_0.6)] overflow-hidden box-border h-[45px] min-w-[147px] text-whitesmoke">
      <Button className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        {children}
      </Button>
    </div>
  )
}

OrangeButtonPill.propTypes = {
  children: PropTypes.node
}

export { OrangeButtonPill }
