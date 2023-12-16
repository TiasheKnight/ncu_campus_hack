import React from "react";

import { Img, Text } from "components";

const JudgementSuccessNoticePage = () => {
  return (
    <>
      <div className="bg-white-A700_a2 flex flex-col font-inter gap-5 items-center justify-center mx-auto px-[13px] py-[118px] w-auto sm:w-full md:w-full">
        <Text
          className="max-w-[1126px] md:max-w-full md:text-5xl text-[70px] text-black-900 text-center w-full"
          size="txtInterExtraBold70"
        >
          通知判定結果給舉報人以及被舉報人
        </Text>
        <div className="bg-blue_gray-100 flex flex-col items-center justify-start p-[15px] md:px-5 rounded-[30px] w-1/5 md:w-full">
          <div className="flex flex-row gap-5 items-center justify-center w-3/4 md:w-full">
            <Img
              className="h-12 md:h-auto object-cover w-12"
              src="images/img_checkcircle1.png"
              alt="checkcircleOne"
            />
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center"
              size="txtInterSemiBold50Black900"
            >
              確認
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default JudgementSuccessNoticePage;
