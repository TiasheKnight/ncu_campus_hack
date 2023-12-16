import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const SendAnnouncePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-inter h-[1080px] mx-auto relative w-full">
        <div className="absolute bg-blue_gray-100 flex flex-col md:gap-10 gap-[61px] h-max inset-[0] items-center justify-center m-auto p-[31px] sm:px-5 w-full">
          <div className="flex flex-col md:h-auto max-w-[1801px] mt-[220px] md:px-5 relative w-full">
            <div className="flex flex-col mx-auto w-full">
              <div className="flex md:flex-col flex-row gap-8 h-full items-center justify-start mx-auto w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-[132px]"
                  size="txtInterRegular50Black900"
                >
                  活動：
                </Text>
                <Text
                  className="bg-white-A700 border-2 border-black-900 border-solid flex-1 h-[78px] justify-center md:max-w-full max-w-screen-sm sm:px-5 px-[35px] py-5 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-full"
                  size="txtInterRegular30"
                >
                  選擇通知活動
                </Text>
                <Button
                  className="border-2 border-black-900 border-solid flex items-center justify-center rounded-[20px] w-[63px]"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                >
                  <Img
                    className="h-[45px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                  />
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[38px] h-full items-center justify-start mt-[-54px] mx-auto w-full z-[1]">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-[232px]"
                  size="txtInterRegular50Black900"
                >
                  通知標題：
                </Text>
                <Text
                  className="bg-white-A700 border-2 border-black-900 border-solid flex-1 h-[78px] justify-center md:max-w-full max-w-screen-sm sm:px-5 px-[35px] py-5 rounded-[20px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-full"
                  size="txtInterRegular30"
                >
                  請填入您的通知標題
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[19px] h-[361px] md:h-auto items-center justify-start mt-[-54px] mx-auto w-full z-[1]">
              <Text
                className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
                size="txtInterRegular50Black900"
              >
                通知內容：
              </Text>
              <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-1 flex-col h-[250px] md:h-auto items-center justify-center max-w-[1504px] md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[264px]"
                  size="txtInterRegular30"
                >
                  活動通知200字以內
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
            color="deep_purple_200"
            size="sm"
            variant="fill"
          >
            發布
          </Button>
        </div>
        <div className="absolute bg-blue_gray-700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto p-[22px] sm:px-5 top-[0] w-full">
          <Img
            className="common-pointer h-[70px] md:ml-[0] ml-[22px] md:mt-0 mt-[26px]"
            src="images/img_home.svg"
            alt="home"
            onClick={() => navigate("/homenormaluser")}
          />
          <Img
            className="h-[120px] md:ml-[0] ml-[26px] md:mt-0 mt-3.5 w-[120px]"
            src="images/img_returnbutton.svg"
            alt="returnbutton"
          />
          <Text
            className="md:ml-[0] ml-[512px] md:mt-0 mt-[23px] md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            發送通知
          </Text>
        </div>
      </div>
    </>
  );
};

export default SendAnnouncePage;
