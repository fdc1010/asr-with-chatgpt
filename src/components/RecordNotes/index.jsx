import { Button, Img } from 'components'
import { noop } from 'lodash'
import PropTypes from 'prop-types'

const RecordNotes = ({ onHandleRec = noop, stopListening = noop, startListening = noop }) => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-3 items-center w-full px-4">
        <div className="flex flex-col items-start justify-center">
          <Button>
            <Img
              className="w-[30px]"
              alt=""
              width={30}
              height={30}
              src="/assets/images/update@2x.png"
            />
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button
            onClick={onHandleRec}
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={stopListening}
            onMouseUp={stopListening}>
            <Img
              className="rounded-[200px] border-2 border-whitesmoke-100"
              alt=""
              width={80}
              height={80}
              src="/assets/svg/record.svg"
            />
          </Button>
        </div>
        <div className="flex flex-col items-end">
          <Button>
            <Img
              className="w-[30px]"
              alt=""
              width={30}
              height={30}
              src="/assets/images/upload@2x.png"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
RecordNotes.propTypes = {
  onHandleRec: PropTypes.func,
  stopListening: PropTypes.func,
  startListening: PropTypes.func
}
export default RecordNotes
