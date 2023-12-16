import React from "react";

import { Img, Line, Text } from "components";

const AnnounceDetailPage = () => {
  return (
    <>
      <div className="bg-cyan-100_c1 flex flex-col font-inter gap-[55px] items-center justify-start mx-auto pb-[63px] w-full">
        <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-10 gap-[223px] items-center justify-end p-2.5 w-full">
          <Text
            className="md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            通知詳細資訊
          </Text>
          <Img
            className="h-[100px] mb-2 mr-[21px] md:mt-0 mt-[13px] w-[100px]"
            src="images/img_delete.svg"
            alt="delete"
          />
        </div>
        <div className="flex flex-col gap-[39px] items-center justify-start max-w-[1143px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-center w-auto md:w-full">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-cyan-900 w-auto"
              size="txtInterSemiBold50Cyan900"
            >
              全校活動大會
            </Text>
            <Line className="bg-teal-900_01 h-[3px] w-full" />
          </div>
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900_02 w-[99%] sm:w-full"
            size="txtInterSemiBold50Black90002"
          >
            最新活動即將到來，特來邀請您參加12/29日的歡樂派對，活動名稱為「SA大派對」！！
          </Text>
        </div>
      </div>
    </>
  );
};

export default AnnounceDetailPage;
