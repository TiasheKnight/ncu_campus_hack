import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ActivitiesPublishSelectPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-cyan-100 flex flex-col font-inter items-center justify-center mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1090px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-[78%] md:w-full">
            <Img
              className="h-[70px] w-[70px]"
              src="images/img_returnbutton.svg"
              alt="returnbutton"
            />
            <Text
              className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
              size="txtInterRegular64"
            >
              請選擇您要發布的活動型別
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-center w-auto md:w-full">
            <Button
              className="common-pointer cursor-pointer h-[540px] leading-[normal] rounded-[50%] md:text-5xl text-[64px] text-center w-[540px]"
              onClick={() => navigate("/generalactivitiesform")}
              shape="circle"
              color="light_green_A100"
              size="xl"
              variant="fill"
            >
              一般活動
            </Button>
            <div className="bg-red-A100 flex flex-col h-[540px] sm:h-auto items-center justify-center p-[134px] md:px-10 sm:px-5 rounded-[50%] w-[540px] sm:w-full">
              <Text
                className="my-24 md:text-5xl text-[64px] text-black-900"
                size="txtInterRegular64"
              >
                緊急活動
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesPublishSelectPage;
