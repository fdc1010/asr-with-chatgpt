import React, { useCallback, useEffect, useState } from 'react'
import AuthModal from 'modals/AuthModal'
import RecordNotes from 'components/RecordNotes'
import Header from 'layout/Header'
import Body from 'layout/Body'
import Footer from 'layout/Footer'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const appId = import.meta.env.VITE_SPEECHLY_API_KEY
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

const Home = () => {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [isOutput, setIsOutput] = useState(false)
  const [result, setResult] = useState('')
  const [prompt, setPrompt] = useState('')

  const onHandlePrompt = (wordsDict) => {
    setPrompt(wordsDict)
    console.log('wordsDict', wordsDict)
  }

  const onHandleModalOpen = () => setIsModalOpen(true)
  const onHandleModalClose = () => setIsModalOpen(false)

  const onHandleSignUp = useCallback(() => {
    if (isModalOpen) onHandleModalClose()
    else onHandleModalOpen()
  }, [isModalOpen])
  const onHandleRec = useCallback(
    () => {
      setIsRecording(true)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isRecording]
  )
  const onHandleTrans = useCallback(
    (transcribing) => {
      setIsTranscribing(transcribing)
      setIsRecording(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isTranscribing]
  )

  const onHandleOutput = useCallback(
    (output, isOutput) => {
      if (isOutput) {
        setIsTranscribing(false)
        setIsOutput(true)
        setResult(output)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOutput]
  )

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>
  }
  const startListening = () => SpeechRecognition.startListening({ continuous: true })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (transcript) onHandlePrompt(transcript)
    if (listening && isTranscribing && !isRecording) {
      SpeechRecognition.stopListening()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript])

  return (
    <div className="audiopen-style">
      <AuthModal
        isOpen={isModalOpen}
        onRequestClose={onHandleModalClose}
        shouldCloseOnOverlayClick={true}
      />
      <Header
        onHandleSignUp={onHandleSignUp}
        isRecording={isRecording}
        isTranscribing={isTranscribing}
        isOutput={isOutput}
        onClickRec={onHandleRec}
        onClickTrans={onHandleTrans}
        onHandleOutput={onHandleOutput}
        result={result}
        prompt={prompt}
      />
      <Body />
      <Footer />
      {!isRecording && !isTranscribing && !isOutput && (
        <div className="fixed top-[calc(100%-90px)] w-full">
          <RecordNotes
            onClickRec={onHandleRec}
            startListening={startListening}
            stopListening={SpeechRecognition.stopListening}
          />
        </div>
      )}
    </div>
  )
}

export default Home
