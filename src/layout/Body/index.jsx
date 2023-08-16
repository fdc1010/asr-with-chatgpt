import { SmokeButtonPill } from 'components'
import Card from 'components/Card'

const Body = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[40px] mix-blend-normal text-left text-base text-dimgray font-dm-sans">
      <div className="w-full h-[763px] p-10 mt-[200px]">
        <Card />
      </div>
      <div className="font-fraunces">
        <SmokeButtonPill size={250}>read more Testimonials</SmokeButtonPill>
      </div>
    </div>
  )
}

export default Body
