import React from "react";

import { Button, Img, Text } from "components";

const AudiopenHowItWorksPage = () => {
  return (
    <>
      <div className="bg-gradient  flex flex-col font-fraunces items-center justify-start mx-auto pb-[111.03px] pt-[27.1px] md:px-10 sm:px-5 px-[243.94px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-start max-w-[813px] mx-auto w-full">
          <Img
            className="h-[45px] w-[45px]"
            src="images/img_location.svg"
            alt="location"
          />
          <div className="flex flex-col items-start justify-center max-w-[813px] mt-2 pb-[0.45px] pl-[343.11px] pr-[342.62px] md:px-10 sm:px-5 w-full">
            <Text
              className="sm:text-[23.1px] md:text-[25.1px] text-[27.1px] text-blue_gray-800 text-center w-auto"
              size="txtFrauncesSemiBold271"
            >
              AudioPen
            </Text>
          </div>
          <div className="flex flex-col font-dmsans items-start justify-center max-w-[704px] pl-[198.9px] pr-[199.53px] md:px-10 sm:px-5 w-full">
            <Text
              className="text-[17.17px] text-blue_gray-800 text-center w-auto"
              size="txtDMSansRegular1717"
            >
              Watch a demo of how AudioPen works.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start mt-[26px] rounded-[9px] w-[78%] md:w-full">
            <div className="flex flex-col items-center justify-start rounded-[9px] w-full">
              <div className="bg-black-900 flex flex-col items-start justify-start max-w-[632px] w-full">
                <div className="bg-black-900 flex flex-col items-center justify-start w-full">
                  <div className="md:px-10 sm:px-5 px-[285.5px] py-[168.95px] relative w-[632px] md:w-full">
                    <Img
                      className="absolute h-[381px] inset-[0] justify-center m-auto object-cover w-[632px]"
                      src="images/img_divytpcuedth.png"
                      alt="divytpcuedth"
                    />
                    <Img
                      className="h-[43px] m-auto relative w-[61px]"
                      src="images/img_buttonplay.svg"
                      alt="buttonplay"
                    />
                    <div className="bg-gray-900_cc flex flex-col items-end justify-center mt-auto pb-[13.55px] md:pl-10 sm:pl-5 pl-[79.55px] pr-[10.84px] pt-[14.46px] relative rounded-br-[1px] rounded-tr-[1px] w-[155px]">
                      <Img
                        className="h-3.5 w-[65px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                    <div className="h-[89px] mx-auto relative w-full">
                      <Img
                        className="h-[89px] m-auto object-cover w-full"
                        src="images/img_divytpgradienttop.png"
                        alt="divytpgradientt"
                      />
                      <div className="absolute flex flex-row sm:gap-10 inset-x-[0] items-end justify-between mx-auto md:pl-10 sm:pl-5 pl-[558.35px] pr-[9.03px] top-[0] w-[610px] md:w-full">
                        <div className="p-[4.52px] relative rounded-[22px] w-[45px]">
                          <div className="absolute bg-black-900_56 h-[42px] inset-[0] justify-center m-auto rounded-[50%] w-[42px]"></div>
                          <Img
                            className="h-9 m-auto relative rounded-[50%] w-9"
                            src="images/img_linkphotoimage.png"
                            alt="linkphotoimage"
                          />
                        </div>
                        <Img
                          className="h-[54px] w-[43px]"
                          src="images/img_buttonshare.svg"
                          alt="buttonshare"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-orange-A700 cursor-pointer font-semibold min-w-[132px] mt-[27px] py-3 rounded-[20px] shadow-bs4 text-[12.65px] text-center text-gray-100">
            sign up / log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default AudiopenHowItWorksPage;
