import React from "react";

import { Button, Line, Text } from "components";

const OrganizationEditClubswitch = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col h-full inset-y-[0] items-end justify-end left-[0] max-w-[1700px] my-auto w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
              <Text
                className="md:mt-0 mt-[11px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[120px]"
                size="txtInterRegular40"
              >
                {props?.text1}
              </Text>
              <Text
                className="md:ml-[0] ml-[282px] md:mt-0 mt-[11px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[161px]"
                size="txtInterRegular40"
              >
                {props?.text2}
              </Text>
              <Text
                className="md:ml-[0] ml-[109px] md:mt-0 mt-[15px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-[476px]"
                size="txtInterRegular40"
              >
                {props?.text3}
              </Text>
              <Button
                className="!text-white-A700_a2 cursor-pointer font-inter h-[74px] leading-[normal] md:ml-[0] ml-[66px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[177px]"
                shape="round"
                color="deep_purple_A200"
                size="md"
                variant="fill"
              >
                {props?.button1}
              </Button>
              <Button
                className="!text-white-A700_a2 cursor-pointer font-inter h-[74px] leading-[normal] md:ml-[0] ml-[21px] text-3xl sm:text-[26px] md:text-[28px] text-center w-[177px]"
                shape="round"
                color="blue_A100"
                size="md"
                variant="fill"
              >
                {props?.button2}
              </Button>
            </div>
            <Line className="bg-black-900 h-px w-full" />
          </div>
        </div>
        <Button
          className="!text-white-A700_a2 absolute cursor-pointer font-inter h-max inset-y-[0] leading-[normal] my-auto right-[0] text-3xl sm:text-[26px] md:text-[28px] text-center w-[177px]"
          shape="round"
          color="red_800"
          size="md"
          variant="fill"
        >
          {props?.button3}
        </Button>
      </div>
    </>
  );
};

OrganizationEditClubswitch.defaultProps = {
  text1: "中文系",
  text2: "中文代表",
  text3: "xxxxxxxxxxxxxxxxxxxxxx",
  button1: "管理權限",
  button2: "編輯",
  button3: "刪除",
};

export default OrganizationEditClubswitch;
