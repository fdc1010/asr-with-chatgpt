import { Button } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

const Transcribing = ({ onHandleTrans = noop }) => {
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
            onClick={() => onHandleTrans(false)}>
            cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

Transcribing.propTypes = {
  onHandleTrans: PropTypes.func
}
export default React.memo(Transcribing)
