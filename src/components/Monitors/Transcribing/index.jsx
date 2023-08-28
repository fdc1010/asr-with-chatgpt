import { Button } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import axios from 'axios'
import React, { useEffect } from 'react'

const Transcribing = ({ onClickTrans = noop, onHandleOutput = noop, input = '' }) => {
  useEffect(() => {
    async function callChatGPT() {
      const result = await axios.get(`${import.meta.env.VITE_API_BASEURL_PY}/chatgpt`, {
        prompt: input
      })
      onHandleOutput(result.data.text, true)
      onClickTrans(false)
    }
    callChatGPT()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input])
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="audiopen-monitor">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5">
          <div className="loading">
            <div className="dot_1"></div>
            <div className="dot_2"></div>
          </div>
          <div className="">(2/3) transcribing...</div>
          <Button
            className="text-[16px] [text-decoration:underline] opacity-[0.6]"
            onClick={() => onClickTrans(false)}>
            cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

Transcribing.propTypes = {
  onClickTrans: PropTypes.func,
  onHandleOutput: PropTypes.func,
  input: PropTypes.string
}
export default Transcribing
