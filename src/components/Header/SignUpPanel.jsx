import { OrangeButtonPill, SmokeButtonPill } from 'components'
const SignUpPanel = () => {
  return (
    <div className="w-full py-5 my-5 flex flex-row flex-wrap box-border items-start justify-center gap-[20px] text-sm text-whitesmoke">
      <OrangeButtonPill className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        sign up / log in
      </OrangeButtonPill>
      <SmokeButtonPill className="text-sm font-semibold w-full h-full flex flex-col items-center justify-center">
        see how it works
      </SmokeButtonPill>
    </div>
  )
}

export default SignUpPanel
