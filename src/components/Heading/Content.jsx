import { Text } from 'components'

const Content = () => {
  return (
    <div className="w-full text-9xl font-dm-sans">
      <div className="flex flex-col w-full items-center justify-center my-5">
        <div className="bg-orange-A700 h-[5px] mt-[11px] rounded-sm w-[2%]"></div>
      </div>
      <Text
        className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800 text-center w-auto"
        size="txtDMSansBold28">
        Go from fuzzy thought to clear text. <span className="italic font-normal sm:text-[23px] md:text-[25px] text-[27px] text-blue_gray-800 text-center w-auto">Fast.</span>
      </Text>
    </div>
  )
}

export default Content
