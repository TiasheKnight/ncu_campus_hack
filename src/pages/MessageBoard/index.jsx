import React from "react";

import { Button, Img, Text } from "components";

const MessageBoardPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[62px] items-center justify-end mx-auto w-full">
        <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[18px] w-full">
          <Button
            className="cursor-pointer font-semibold h-[98px] leading-[normal] ml-3.5 md:ml-[0] md:mt-0 mt-[9px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[234px]"
            shape="round"
            color="green_800"
            size="lg"
            variant="fill"
          >
            參加
          </Button>
          <Text
            className="md:ml-[0] ml-[231px] md:mt-0 mt-1 md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            留言板
          </Text>
          <Img
            className="h-[100px] md:ml-[0] ml-[319px] md:mt-0 mt-1.5 w-[100px]"
            src="images/img_delete.svg"
            alt="delete"
          />
        </div>
        <div className="md:h-[1048px] h-[1092px] md:px-5 relative w-full">
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[90%]">
            <div className="flex flex-col gap-[7px] h-28 md:h-auto items-start justify-center max-w-[1075px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                跑跑
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
            <div className="flex flex-col gap-1.5 h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                傑尼
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                你們系想跟我們系搶大老鷹？
              </Text>
            </div>
            <div className="flex flex-col gap-2 h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                傑法
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                那肯定是癡人說夢吧:)
              </Text>
            </div>
            <div className="flex flex-col gap-1.5 h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                秋天再來一波
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                跑跑
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
            <div className="flex flex-col gap-[7px] h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                跑跑
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
            <div className="flex flex-col gap-[9px] h-[114px] md:h-auto items-start justify-center max-w-[1075px] mt-[25px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                跑跑
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
            <div className="flex flex-col h-28 md:h-auto items-start justify-center max-w-[1075px] mt-7 w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                跑跑
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                今年不會輸了
              </Text>
            </div>
          </div>
          <div className="absolute bg-blue_gray-700 bottom-[20%] flex md:flex-col flex-row gap-2.5 inset-x-[0] items-center justify-end mx-auto w-auto md:w-full">
            <div className="bg-white-A700 border-2 border-black-900 border-solid h-[120px] rounded-[20px] w-[78%]"></div>
            <Img
              className="h-24 md:h-auto object-cover w-24"
              src="images/img_arrowturndownleft.png"
              alt="arrowturndownle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageBoardPage;
