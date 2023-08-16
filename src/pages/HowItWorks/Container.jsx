import Title from 'components/Slogan/Title'
import { OrangeButtonPill } from 'components'
import Record from './Record'
import VideoLoader from './VideoLoader'
import VideoTutorial from './VideoTutorial'

const Container = () => {
  return (
    <div className="text-center text-8xl-1 text-darkslategray font-fraunces">
      <Record />
      <Title />
      <VideoLoader />
      <VideoTutorial />
      <div className="my-5 flex flex-row items-start justify-center text-[30px]">
        <OrangeButtonPill>sign up / log in</OrangeButtonPill>
      </div>
    </div>
  )
}

export default Container
