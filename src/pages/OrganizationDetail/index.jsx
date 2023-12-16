import React from "react";

import { Button, Text } from "components";

const OrganizationDetailPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-inter gap-[46px] items-center justify-start mx-auto pb-[445px] w-full">
        <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-10 gap-[91px] items-center justify-start p-[18px] w-full">
          <Button
            className="cursor-pointer font-semibold h-[102px] leading-[normal] md:ml-[0] ml-[3px] md:mt-0 mt-[5px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[244px]"
            shape="round"
            color="green_800_01"
            size="lg"
            variant="fill"
          >
            關注
          </Button>
          <Text
            className="md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            組織詳細訊息
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1127px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            組織名稱：學生會
          </Text>
          <Text
            className="mt-[25px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterRegular40"
          >
            創辦管理員：學生會長
          </Text>
          <Text
            className="mt-[54px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
            size="txtInterRegular40"
          >
            組織描述：ooooooooooooooooooooooooooooooxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </Text>
        </div>
      </div>
    </>
  );
};

export default OrganizationDetailPage;
