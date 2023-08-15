import { OrangeButtonPill, SmokeButtonPill } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
const SignUpPanel = ({ onHandleClick = noop }) => {
  return (
    <div className="w-full py-10 my-auto flex flex-row flex-wrap box-border items-start justify-center gap-[20px] text-sm text-whitesmoke">
      <OrangeButtonPill
        onHandleClick={onHandleClick}
        className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        sign up / log in
      </OrangeButtonPill>
      <SmokeButtonPill className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        see how it works
      </SmokeButtonPill>
    </div>
  )
}

SignUpPanel.propTypes = {
  onHandleClick: PropTypes.func
}
export default SignUpPanel
