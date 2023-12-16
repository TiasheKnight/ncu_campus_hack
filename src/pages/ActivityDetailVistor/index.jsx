import React from "react";

import { Button, Img, Text } from "components";

const ActivityDetailVistorPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-inter gap-[46px] justify-start mx-auto pb-[236px] w-full">
        <div className="flex flex-col items-center w-full">
          <header className="bg-black-900_01 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Button
              className="cursor-pointer h-[97px] leading-[normal] mb-[19px] ml-8 md:ml-[0] md:mt-0 mt-[27px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[233px]"
              shape="round"
              color="gray_600"
              size="lg"
              variant="fill"
            >
              參加
            </Button>
            <Img
              className="h-[131px] md:ml-[0] ml-[105px] md:mt-0 mt-3 w-[131px]"
              src="images/img_activityfollow.svg"
              alt="activityfollow"
            />
            <Img
              className="h-[122px] mb-[9px] md:ml-[0] ml-[33px] md:mt-0 mt-3 w-[122px]"
              src="images/img_publisherfollow.svg"
              alt="publisherfollow"
            />
            <Img
              className="h-[124px] mb-[5px] ml-14 md:ml-[0] md:mt-0 mt-3.5 w-[124px]"
              src="images/img_activitymessagebutton_gray_600.svg"
              alt="activitymessage"
            />
            <Img
              className="h-[100px] mb-4 ml-14 md:ml-[0] md:mt-0 mt-[27px] w-[100px]"
              src="images/img_reportbutton_gray_600.svg"
              alt="reportbutton"
            />
            <Img
              className="h-[100px] mb-[19px] md:ml-[0] ml-[67px] mr-[41px] md:mt-0 mt-6 w-[100px]"
              src="images/img_delete.svg"
              alt="delete"
            />
          </header>
        </div>
        <div className="flex flex-col items-center justify-start ml-8 md:ml-[0] md:px-5 w-[78%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動名稱：運動會
            </Text>
            <Text
              className="mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動種類：校級活動
            </Text>
            <Text
              className="mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動發起人：xxx
            </Text>
            <Text
              className="mt-[29px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動日期：xxxx/xx/xx
            </Text>
            <Text
              className="mt-7 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動時間：oo:oo - oo:oo
            </Text>
            <Text
              className="mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動地點：體育場
            </Text>
            <Text
              className="md:ml-[0] ml-[3px] mt-6 sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              目前參與人數：xxx
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[33px] w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                活動人數下限：0
              </Text>
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterRegular40"
              >
                活動人數上限：xxxx
              </Text>
            </div>
            <Text
              className="mt-[22px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterRegular40"
            >
              活動內容：xxxxxxxxxxxxxxxxxxxx
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityDetailVistorPage;
