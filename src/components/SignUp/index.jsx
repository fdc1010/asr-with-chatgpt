import { OrangeButtonPill, SmokeButtonPill } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
const SignUp = ({ onHandleSignUp = noop }) => {
  const navigate = useNavigate()
  return (
    <div className="w-full py-10 my-auto flex flex-row flex-wrap box-border items-start justify-center gap-[20px] text-sm text-whitesmoke-100">
      <OrangeButtonPill
        onHandleClick={onHandleSignUp}
        className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        sign up / log in
      </OrangeButtonPill>
      <SmokeButtonPill
        onHandleClick={() => navigate('/howitworks')}
        className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        see how it works
      </SmokeButtonPill>
    </div>
  )
}

SignUp.propTypes = {
  onHandleClick: PropTypes.func
}
export default SignUp
