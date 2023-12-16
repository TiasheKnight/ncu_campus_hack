import React from "react";

import { Button, Img, Text } from "components";

const ReportFormPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[69px] items-center justify-start mx-auto pb-[107px] w-full">
        <div className="bg-black-900_01 flex sm:flex-col flex-row md:gap-10 gap-[278px] items-center justify-end p-5 w-full">
          <Text
            className="md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            檢舉內容
          </Text>
          <Img
            className="h-[100px] mb-[3px] mr-5 w-[100px]"
            src="images/img_delete.svg"
            alt="delete"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1081px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
            size="txtInterRegular50Black900"
          >
            檢舉原因：
          </Text>
          <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[558px] md:h-auto items-center justify-center max-w-[1081px] md:px-10 sm:px-5 px-[50px] py-2.5 rounded-[20px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-400 w-[329px]"
              size="txtInterRegular30"
            >
              請描述檢舉此活動的原因
            </Text>
          </div>
        </div>
        <Button
          className="border-2 border-black-900 border-solid cursor-pointer font-bold leading-[normal] min-w-[621px] md:min-w-full rounded-[35px] sm:text-4xl md:text-[38px] text-[40px] text-center"
          color="deep_purple_200"
          size="sm"
          variant="fill"
        >
          提交
        </Button>
      </div>
    </>
  );
};

export default ReportFormPage;
