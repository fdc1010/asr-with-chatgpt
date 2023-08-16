import { Button, Img, Text } from 'components'
import PropTypes from 'prop-types'
import RecordNotes from 'components/RecordNotes'
import { toTitleCase } from 'utils'
import dayjs from 'dayjs'

const Output = ({ result = '', input = '' }) => {
  const date = dayjs().format('dddd, MMMM D, YYYY')
  return (
    <div className="w-full text-[36px] text-whitesmoke-100 font-fraunces">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-[30px] [background:linear-gradient(48.69deg,_rgba(61,_63,_84,_0.9),_#3d3f54)] w-[700px] h-[615.2px] z-[1]">
          <div className="flex flex-row items-start justify-center p-5">
            <Text className="leading-[54px] font-semibold">{toTitleCase(input)}</Text>
          </div>
          <div className="flex flex-row items-start justify-center">
            <Text className="font-light text-[16px]">{date}</Text>
          </div>
          <div className="w-[calc(100%_-_80px)] flex flex-row items-start justify-start text-left text-[22px] font-dm-sans p-7 mt-8">
            <Text className="leading-[33px] flex items-center w-[618px] shrink-0">
              {toTitleCase(result)}
            </Text>
          </div>
          <div className="absolute w-full left-0">
            <RecordNotes />
          </div>
          <div className="p-7 mt-10">
            <div className="rounded-[60px] flex flex-col items-center justify-center w-[86px] h-[30px] min-h-[12px] text-[11px] font-dm-sans border border-dashed border-whitesmoke-200 ">
              <Text className="font-bold">+ add tag</Text>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-between min-h-[30px] my-5">
              <div className="p-3">
                <Img className="h-5" alt="" src="/assets/images/new-delete@2x.png" />
              </div>
              <div className="p-3">
                <Img className="h-5" alt="" src="/assets/images/copy@2x.png" />
              </div>
              <div className="p-3">
                <Img className="h-5" alt="" src="/assets/images/save@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center w-full">
          <Button className="rounded-b-mini bg-orangered shadow-[0px_2px_8px_-4px_rgba(61,_63,_84,_0.25)] w-[156.17px] overflow-hidden z-[0] text-[12px] font-dm-sans">
            view original transcript
          </Button>
        </div>
      </div>
    </div>
  )
}
Output.propTypes = {
  result: PropTypes.string,
  input: PropTypes.string
}
export default Output
