import React from 'react'
import { default as ModalProvider } from 'react-modal'

import { Button, Input, Text } from 'components'

const SignUpModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById('root')}
      className="m-auto !w-[31%]"
      overlayClassName="backdrop-opacity-[0.5] bg-orange-A700_4c blur-[10.00px] fixed flex h-full inset-y-[0] w-full"
      {...props}>
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray-100 flex flex-col gap-5 items-center justify-start mb-[11px] pb-[30px] pt-[29.5px] md:px-5 px-[30px] rounded-[30px] w-[400px] sm:w-full">
          <div className="flex flex-col items-start justify-center pb-[0.5px] pl-[49.41px] pr-[50.59px] md:px-10 sm:px-5 w-[340px]">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-800 text-center w-auto"
              size="txtFrauncesSemiBold30">
              Sign up or Log in
            </Text>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start w-[74%] md:w-full">
            <Button className="bg-orange-A700 cursor-pointer font-semibold py-[13px] rounded-[22px] shadow-bs text-center text-gray-100 text-sm w-[250px]">
              sign in with Google
            </Button>
            <Input
              name="button"
              placeholder="or sign up / log in with email"
              className="font-semibold p-0 placeholder:text-blue_gray-800 sm:px-5 text-blue_gray-800 text-center text-sm w-full"
              wrapClassName="bg-gray-100 pb-[11px] pt-[15px] px-7 rounded-[22px] shadow-bs1 w-full"
              type="email"></Input>
            <div className="font-dmsans md:h-[30px] h-[33px] pt-0.5 px-0.5 relative w-[96%]">
              <Text
                className="absolute left-[5%] text-[10px] text-blue_gray-800_99 text-center top-[6%]"
                size="txtDMSansRegular10">
                <>by signing up, you agree to AudioPen&#39;s </>
              </Text>
              <div className="absolute bottom-[0] flex flex-row items-start justify-center right-[5%] w-[69%]">
                <Text
                  className="mt-4 text-[10px] text-blue_gray-800_99 text-center"
                  size="txtDMSansRegular10">
                  Policy
                </Text>
                <Text
                  className="ml-1 mt-[15px] text-[10px] text-blue_gray-800_99 text-center"
                  size="txtDMSansRegular10">
                  {' '}
                  and Terms of Use.{' '}
                </Text>
                <Text
                  className="mb-4 ml-4 text-[10px] text-blue_gray-800_99 text-center"
                  size="txtDMSansRegular10">
                  Privacy{' '}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  )
}

export default SignUpModal
