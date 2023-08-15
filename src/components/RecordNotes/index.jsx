import { Img } from 'components'
const RecordNotes = () => {
  return (
    <div className="fixed top-[calc(100%-90px)] w-full overflow-hidden">
      <div className="grid grid-cols-3 items-center w-full px-4">
        <div>
          <Img
            className="overflow-hidden object-cover w-[30px]"
            alt=""
            width={30}
            height={30}
            src="/assets/images/update@2x.png"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Img
            className="rounded-[200px] overflow-hidden object-cover"
            alt=""
            width={80}
            height={80}
            src="/assets/svg/record.svg"
          />
        </div>
        <div className="flex flex-col items-end">
          <Img
            className="overflow-hidden object-cover w-[30px]"
            alt=""
            width={30}
            height={30}
            src="/assets/images/upload@2x.png"
          />
        </div>
      </div>
    </div>
  )
}

export default RecordNotes
