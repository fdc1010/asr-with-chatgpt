import { Text } from "components"

const Title = () => {
  return (
    <div className="w-full">
      <div className="font-semibold">
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-800 text-center w-auto"
          size="txtFrauncesSemiBold48">
          AudioPen
        </Text>
      </div>
    </div>
  )
}

export default Title
