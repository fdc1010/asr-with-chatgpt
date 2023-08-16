import { Text } from 'components'
import React from 'react'

const NotFound = () => {
  return (
    <div className="audiopen-style">
      <div className="w-full h-screen font-semibold flex flex-col items-center justify-center">
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-800 text-center w-auto"
          size="txtFrauncesSemiBold48">
          Opps! We ran out of code
        </Text>
      </div>
    </div>
  )
}

export default NotFound
