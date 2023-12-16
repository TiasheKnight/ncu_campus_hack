import React from "react";

import { Button, Text } from "components";

const EditOrganizationInterviewPage = () => {
  return (
    <>
      <div className="bg-blue_gray-100_01 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[78px] items-center justify-start mx-auto pb-[100px] w-full">
        <div className="bg-black-900_01 flex md:flex-col flex-row md:gap-10 gap-[91px] items-start justify-start p-[19px] w-full">
          <Button
            className="cursor-pointer font-semibold h-[97px] leading-[normal] md:ml-[0] ml-[13px] md:mt-0 mt-2 text-3xl sm:text-[26px] md:text-[28px] text-center w-[233px]"
            shape="round"
            color="deep_purple_200_01"
            size="lg"
            variant="fill"
          >
            完成
          </Button>
          <Text
            className="md:mt-0 my-[3px] md:text-5xl text-[80px] text-amber-A400 text-center"
            size="txtInterRegular80"
          >
            編輯組織介紹
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[1200px] w-full">
          <Text
            className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-auto"
            size="txtInterRegular50Black900"
          >
            組織介紹：
          </Text>
          <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col h-[617px] md:h-auto items-center justify-center max-w-[1059px] mx-auto md:px-5 px-[50px] py-2.5 rounded-[20px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-center text-gray-400 w-[181px]"
              size="txtInterRegular30"
            >
              您的組織介紹
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditOrganizationInterviewPage;
