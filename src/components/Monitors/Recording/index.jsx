import React from 'react'
import { Button, Img } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'

const Recording = ({ onHandleTrans = noop, prompt = '' }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="audiopen-monitor">
        <div className="absolute w-[calc(100%_-_60px)] top-[calc(50%_+_71.5px)] right-[30px] left-[30px] h-5">
          <Button>
            <Img
              className="absolute h-[calc(100%_-_3px)] w-[calc(100%_-_383px)] top-[1.5px] right-[383px] bottom-[1.5px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/assets/images/restart-button@2x.png"
            />
          </Button>
          <Button>
            <Img
              className="absolute h-full w-[calc(100%_-_380px)] top-[0px] right-[0px] bottom-[0px] left-[380px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/assets/images/cancel@2x.png"
            />
          </Button>
        </div>
        <div className="absolute w-[calc(100%_-_380px)] top-[calc(50%_+_73.5px)] right-[190px] left-[190px] rounded-181xl bg-gray shadow-[0px_2px_16px_rgba(61,_63,_84,_0.2)] h-20 overflow-hidden">
          {!!prompt && (
            <Button onClick={() => onHandleTrans(true)}>
              <Img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-181xl max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/assets/images/stop-recording@2x.png"
              />
            </Button>
          )}
        </div>
        <div className="absolute h-[42.18%] w-[61.52%] top-[22.2%] right-[19.13%] bottom-[35.62%] left-[19.35%]">
          <Button>
            <Img
              className="absolute h-[48.49%] w-[100.06%] top-[51.51%] right-[-0.06%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/assets/svg/equalizer.svg"
            />
          </Button>

          <div className="absolute top-[0%] left-[34.56%] leading-[64.42px] font-semibold">
            02:34
          </div>
        </div>
      </div>
    </div>
  )
}
Recording.propTypes = {
  onHandleTrans: PropTypes.func,
  prompt: PropTypes.string
}

export default React.memo(Recording)
