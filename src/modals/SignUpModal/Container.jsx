import { OrangeButtonPill, SmokeButtonPill, Text } from 'components'

const Container = () => {
  return (
    <div className="w-full p-5 rounded-[30px] bg-whitesmoke overflow-hidden flex flex-col items-center justify-start gap-[20px] max-w-[400px] text-center text-sm text-darkslategray-100 font-fraunces">
      <div className="flex flex-col items-start justify-center">
        <Text
          className="text-3xl text-blue_gray-800"
          size="txtFrauncesSemiBold30">
          Sign up or Log in
        </Text>
      </div>
      <div className="w-full flex flex-row items-start justify-center text-[30px]">
        <OrangeButtonPill>sign in with Google</OrangeButtonPill>
      </div>
      <div className="w-full flex flex-row items-start justify-center text-[30px]">
        <SmokeButtonPill size={250}>or sign up / log in with email</SmokeButtonPill>
      </div>
      <div className="font-dmsans flex flex-row items-start justify-center">
        <Text className="text-[10px] text-blue_gray-800_99 text-center" size="txtDMSansRegular10">
          by signing up, you agree to AudioPen&#39;s
          <br />
          Privacy Policy and Terms of Use.
        </Text>
      </div>
    </div>
  )
}

export default Container
