import Arrow from './Arrow'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import { Text } from 'components'
import Recording from 'components/Monitors/Recording'
import Transcribing from 'components/Monitors/Transcribing'
import ProductCard from 'components/ProductCard'
import Heading from 'components/Slogan'
import SignUp from 'components/SignUp'
import Output from 'components/Monitors/Output'

const Header = ({
  onHandleSignUp = noop,
  onHandleTrans = noop,
  isRecording = false,
  isTranscribing = false,
  isOutput = false,
  result = '',
  prompt = ''
}) => {
  return (
    <div className="w-full h-screen text-center py-2 my-2 text-5xs-2 text-darkslategray-100 font-fraunces">
      <ProductCard />
      <Heading />
      {isRecording ? (
        <Recording onHandleTrans={onHandleTrans} prompt={prompt} />
      ) : isTranscribing ? (
        <Transcribing onHandleTrans={onHandleTrans} />
      ) : isOutput ? (
        <Output result={result} input={prompt} />
      ) : (
        <>
          <Text className="text-center text-lg font-dmsans m-auto max-w-sm">
            Just hit record. Then start talking. AudioPen will clean things up when you're done.
          </Text>
          <SignUp onHandleSignUp={onHandleSignUp} />
          <Arrow />
        </>
      )}
    </div>
  )
}

Header.propTypes = {
  onHandleSignUp: PropTypes.func,
  onHandleTrans: PropTypes.func,
  isRecording: PropTypes.bool,
  isTranscribing: PropTypes.bool,
  isOutput: PropTypes.bool,
  result: PropTypes.string,
  prompt: PropTypes.string
}
export default Header
