import React, { useEffect } from 'react'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { noop } from 'lodash'
import PropTypes from 'prop-types'

const appId = import.meta.env.VITE_SPEECHLY_API_KEY
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const Dictaphone = ({ onHandlePrompt = noop, startSpeech = false }) => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const startListening = () => SpeechRecognition.startListening({ continuous: true })

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!startSpeech && listening) {
      onHandlePrompt(transcript)
      SpeechRecognition.stopListening()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (startSpeech) {
      startListening()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])
  return (
    <div>
      <p>{transcript}</p>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}>
        Hold to talk
      </button>
    </div>
  )
}
Dictaphone.propTypes = {
  onHandlePrompt: PropTypes.func,
  startSpeech: PropTypes.bool
}
export default Dictaphone
